import { useState } from "react";
import style from "./victimCheckMain.module.css";
import CopyRight from "../../assets/copyRight";
import ChatNavBar from "../navBar-Footer/chatNavBar";
const SecurityBot = () => {
  const [hackedScore, setHackedScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [warning, setWarning] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [chat, setChat] = useState([]);
  const [followUpQueue, setFollowUpQueue] = useState([]);
  const [detectedIssues, setDetectedIssues] = useState(new Set());

  const threshold = 3;
  const generalQuestions = [
    "Is your device running slower than usual?",
    "Have you noticed any pop-ups appearing randomly?",
    "Has your internet been slower than usual?",
    "Have you received any suspicious emails or messages?",
    "Are your accounts logging you out unexpectedly?",
  ];

  const followUpMap = {
    "slower device": [
      "Is your CPU usage unusually high when idle?",
      "Are unknown programs running in the background?",
    ],
    "pop-ups": [
      "Are the pop-ups appearing even when no browser is open?",
      "Do the pop-ups contain messages asking for personal details?",
    ],
    "internet slow": [
      "Does your network activity spike even when you're not browsing?",
      "Are unknown devices connected to your Wi-Fi?",
    ],
    "suspicious messages": [
      "Did the message contain links or attachments?",
      "Did the message ask for your personal information?",
    ],
    "unexpected logouts": [
      "Have you received password reset emails you didn't request?",
      "Did you notice unauthorized access to your accounts?",
    ],
  };

  const preventionTips = {
    "slower device":
      "Run a malware scan, check CPU usage, and remove unnecessary startup programs.",
    "pop-ups":
      "Use a pop-up blocker, avoid clicking on ads, and scan for adware.",
    "internet slow":
      "Monitor network traffic, secure your Wi-Fi, and check for unauthorized devices.",
    "suspicious messages":
      "Avoid clicking on unknown links, don’t download unknown attachments, enable spam filters.",
    "unexpected logouts":
      "Change passwords, enable 2FA, and check login history.",
  };

  const handleAnswer = (answer) => {
    const currentQuestion =
      index < generalQuestions.length
        ? generalQuestions[index]
        : followUpQueue[0];

    setChat((prevChat) => [
      ...prevChat,
      { sender: "bot", text: currentQuestion },
      { sender: "user", text: answer },
    ]);

    if (answer === "yes") {
      if (index < generalQuestions.length) {
        const issueKey = Object.keys(followUpMap)[index];
        setDetectedIssues((prev) => new Set([...prev, issueKey]));

        if (followUpMap[issueKey]) {
          setFollowUpQueue(followUpMap[issueKey]);
        }

        setHackedScore((prev) => {
          const newScore = prev + 1;
          if (newScore >= threshold) setWarning(true);
          return newScore;
        });
      }
    }

    if (followUpQueue.length > 0) {
      setFollowUpQueue((prev) => prev.slice(1));
    } else if (index < generalQuestions.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const handleWarningOk = () => {
    setShowTips(true);
    setWarning(false);
  };

  const handleTipsOk = () => {
    window.location.reload();
  };

  return (
    <div className={style.main}>
      <ChatNavBar title={"HackCheck"} Heading={"Hack Check"} />
      <div className={style.ChatContainer}>
        <div className={style.mainchatSection}>
          <h2>💬 Security Chatbot</h2>
          <div className={style.ChatBox}>
            {chat.map((entry, idx) => (
              <p
                key={idx}
                className={
                  entry.sender === "bot" ? style.BotMessage : style.UserMessage
                }
              >
                {entry.text}
              </p>
            ))}
          </div>

          {warning && (
            <div className={style.PopUp}>
              <div className={style.Warning}>
                <p>⚠️ WARNING: Your device might be hacked!</p>
                <div className={style.popUpBtn}>
                  <button className={style.OkButton} onClick={handleWarningOk}>
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}

          {showTips && (
            <div className={style.PopUp}>
              <div className={style.Tips}>
                <h3>🔍 Security Tips:</h3>
                {Array.from(detectedIssues).map((issue, idx) => (
                  <p key={idx}>✅ {preventionTips[issue]}</p>
                ))}
                <div className={style.popUpBtn}>
                  <button className={style.OkButton} onClick={handleTipsOk}>
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}

          {!warning && !showTips && (
            <div className={style.questionSection}>
              <div className={style.QuestionBox}>
                <p className={style.BotQuestion}>
                  {index < generalQuestions.length
                    ? generalQuestions[index]
                    : followUpQueue[0]}
                </p>
                <div className={style.ansBtn}>
                  <button
                    className={style.YesButton}
                    onClick={() => handleAnswer("yes")}
                  >
                    Yes
                  </button>
                  <button
                    className={style.NoButton}
                    onClick={() => handleAnswer("no")}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}

          {!warning &&
            !showTips &&
            index >= generalQuestions.length - 1 &&
            hackedScore < threshold && (
              <div className={style.PopUp}>
                <div className={style.Tips}>
                  <p className={style.SafeMessage}>
                    ✅ Your system appears to be safe for now. Stay alert and
                    follow good security practices!
                  </p>
                  <div className={style.popUpBtn}>
                    <button className={style.OkButton} onClick={handleTipsOk}>
                      OK
                    </button>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
      <CopyRight />
    </div>
  );
};

export default SecurityBot;
