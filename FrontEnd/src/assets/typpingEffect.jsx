import { useState, useEffect } from "react";

export default function TypingEffect({ text, onComplete }) {
  const [displayText, setDisplayText] = useState(""); // Tracks the visible text
  const [index, setIndex] = useState(0); // Tracks the current character index

  useEffect(() => {
    if (index < text.length) {
      const typingInterval = setInterval(() => {
        setDisplayText((prev) => prev + text[index]); // Add one character at a time
        setIndex((prev) => prev + 1); // Move to the next character
      }, 70); // Adjust typing speed in milliseconds
      return () => clearInterval(typingInterval); // Cleanup interval on component unmount or text change
    }
    onComplete();
  }, [index, text]);

  return <div>{displayText}</div>;
}
