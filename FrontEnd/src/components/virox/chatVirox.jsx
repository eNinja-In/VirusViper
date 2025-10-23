import style from "./chatVirox.module.css";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import TypingEffect from "../../assets/typpingEffect";

export default function ViroxChat() {
  const [userMessage, setUserMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // Track typing state
  const [socket, setSocket] = useState(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const newSocket = io(`${import.meta.env.VITE_SERVER_LINK}`);
    setSocket(newSocket);

    newSocket.on("response", (botReply) => {
      setLoading(false);
      setIsTyping(true); // Start typing effect
      setChatMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { ...prevMessages[prevMessages.length - 1], bot: botReply }
      ]);
    });

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = () => {
    if (userMessage.trim()) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { user: userMessage, bot: null }
      ]);
      socket.emit("message", userMessage);
      setLoading(true);
      setUserMessage(""); // Clear input after sending
    }
  };

  const handleInputChange = (event) => setUserMessage(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  // Function to handle completion of TypingEffect
  const handleTypingComplete = () => {
    setIsTyping(false); // Enable input when typing is done
  };

  return (
    <div className={style.main}>
      <div className={style.chatApp}>
        <div className={style.chatSection}>
          <div className={style.chatMessages}>
            <div className={style.chatmain} ref={chatContainerRef}>
              {chatMessages.map((msg, index) => (
                <div key={index} className={style.message}>
                  <div className={style.userMsg}>{msg.user}</div>
                  <div className={style.botMsg}>
                    {msg.bot ? (
                      <TypingEffect
                        text={msg.bot}
                        onComplete={handleTypingComplete} // Call when typing is done
                      />
                    ) : (
                      loading && <div>Thinking ...</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
                      disabled={isTyping} // Disable input while typing effect
                    />
                  </div>
                  <div className={style.submitBtn} onClick={sendMessage}>
                    <img src="/aiChat/submit.png" alt="Enter" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
