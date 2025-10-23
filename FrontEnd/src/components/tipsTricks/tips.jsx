import { useEffect, useState } from "react";
import style from "./tips.module.css";

export default function TipsTricks() {
  const [tipsTricks, setTipsTricks] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch("/DB/tipTricks.json")
      .then((response) => response.json())
      .then((data) => setTipsTricks(data.internet_security_tips))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={style.main}>
      <div className={style.tricks}>
        <div className={style.tricksHeading}>
          <h1>Tips & Tricks</h1>
        </div>
        <div className={style.tips}>
          {tipsTricks ? (
            Object.entries(tipsTricks).map(([category, tips], index) => (
              <div
                key={category}
                className={`${style.card} ${
                  activeIndex === index ? style.active : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className={style.cardInner}>
                  <div className={style.front}>
                    <div className={style.cardFront}>
                      <div className={style.itemHeading}>
                        <h2>
                          {category
                            .replace(/_/g, " ")
                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                        </h2>
                        <div className={style.imgSection}>
                          <img
                            className={style.itemLogo}
                            src={`/tipsTricks/${category}.png`} // Assuming logo images are named after categories
                            alt={category}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={style.cardBack}>
                    <div className={style.itemInfo}>
                      {Object.values(tips).map((tip, i) => (
                        <div key={i} className={style.tipDetail}>
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading tips...</p>
          )}
        </div>
      </div>
    </div>
  );
}
