import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import style from "./sprituality.module.css";
import ThreeDModel from "../../../assets/model3D";
import TypingEffect from "../../../assets/typpingEffect";
import ChatNavBar from "../../navBar-Footer/chatNavBar";
import sendBtn from "/aiChat/submit.png";

export default function BhagwatGeetaQuery() {
  document.title = "Geeta";
  const [userMessage, setUserMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);
  const [isDropOptionVisible, setDropOptionVisible] = useState(false);
  const [position, setPosition] = useState([0, -0.65, 0]);
  const [isPath, setPath] = useState("/Models/sprituality/lord_krishna4.glb");
  const [setMargin, setSetMargin] = useState(1.5);
  const [camera, setCamera] = useState([10, 4, 10]);
  const [backPath, setBackPath] = useState("/haveny/sprituality/forest3.jpg");
  const [chatBackground, setChatBackground] = useState("/aiChat/geeta0.jpeg");
  const [isTyping, setIsTyping] = useState(false);

  // Music
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.1;
        audioRef.current.play().catch((error) => {
          console.error("Autoplay failed:", error);
        });
        setIsPlaying(true);
      }
    };

    document.addEventListener("click", playMusic, { once: true });

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    setUserMessage("");
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { user: userMessage, bot: null },
    ]);
    setLoading(true);

    try {
      const result = await axios.post(
        `${import.meta.env.VITE_SERVER_LINK}/api/bhagwat-geeta`,
        { query: userMessage }
      );
      setIsTyping(true); // Start typing effect
      const { response } = result.data;

      setChatMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1].bot = response;
        return updatedMessages;
      });

    } catch (error) {
      setChatMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1].bot =
          "Error: Unable to fetch response.";
        return updatedMessages;
      });
      console.error(
        "API Error:",
        error.response?.data?.error || "Unknown error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => setUserMessage(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleTypingComplete = () => {
    setIsTyping(false); // Enable input when typing is done
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/backGroungMusic/2 Mins Lord Krishna's Flute Music for RELAXATION  Krishna flute flute music  krishna - Indian Meditation & Relaxation.mp3"
        loop
      />
      <div className={style.main}>
        <div className={style.geetaHome}>
          <ChatNavBar title={"Geeta"} Heading={"Geeta"} />
          <div className={style.mainChatSection}>
            <div className={style.chatBotSection}>
              <div className={style.bot3DSection}>
                <div
                  className={style.threeDModel}
                  style={{ backgroundImage: `url(${backPath})` }}
                >
                  <ThreeDModel
                    path={isPath}
                    speed={0.01}
                    position={position}
                    camera={camera}
                    setMargin={setMargin}
                  />
                </div>
              </div>
              <div className={style.ChatSection}>
                <div
                  className={style.chatApp}
                  style={{ backgroundImage: `url(${chatBackground})` }}
                >
                  <div className={style.chatMessages} ref={chatContainerRef}>
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={style.message}>
                        <div className={style.userMsg}>{msg.user}</div>
                        <div className={style.botMsg}>
                          {msg.bot ? (
                            <TypingEffect
                              text={msg.bot}
                              onComplete={handleTypingComplete}
                            />
                          ) : (
                            loading && <div>Thinking...</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={style.chatInput}>
                    <div className={style.chatAppInput}>
                      <div className={style.inputSection}>
                        <div className={style.inputQuery}>
                          <div className={style.input}>
                            <input
                              type="text"
                              className={style.chatInputField}
                              placeholder="How can I assist you today"
                              value={userMessage}
                              onChange={handleInputChange}
                              onKeyDown={handleKeyDown}
                              disabled={isTyping} // Disabled while typing effect is active
                            />
                          </div>
                          <div
                            className={style.submitBtn}
                            onClick={sendMessage}
                            style={{
                              pointerEvents: isTyping ? "none" : "auto",
                              opacity: isTyping ? 0.5 : 1,
                            }}
                          >
                            <img src={sendBtn} alt="Enter" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.copyRightSection}>
            <div className={style.copyRight}>
              <p>Copyright&copy;: All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
