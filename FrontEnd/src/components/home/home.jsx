import style from "./home.module.css";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import ThreeDModel from "../../assets/model3D";
// import TypingEffect from "../../assets/typpingEffect";
export default function HomeMain() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  const rotationSpeed = 0.01;

  return (
    <>
      <div className={style.main}>
        <div className={style.home}>
          <div className={style.welcome}>
            <div className={style.welcomeToVirus}>
              <h1>Welcome to VirusViper</h1>
            </div>
          </div>
          <div className={style.homeIntro}>
            <div className={style.homeVirusIntro}>
              <div className={style.virusIntro}>
                <div className={style.homeHeading}>
                  <h1>VirusViper</h1>
                </div>
                <div className={style.homeSubHeading}>
                  <h3>"Defend Your Digital Realm with Precision"</h3>
                </div>
                <div className={style.homeVirusIntoduction}>
                  <p>
                    Empower yourself with VirusViper, where advanced
                    cybersecurity meets unwavering protection. Revel in the
                    latest in cyber technology while we safeguard your data with
                    unparalleled security. Navigate the digital landscape with
                    confidence, knowing that your information is secure. Should
                    you face any challenges or seek robust cybersecurity
                    solutions, our expert team stands ready to assist.
                  </p>
                </div>
                <div className={style.homeBtn}>
                  <div className={style.Btn}>
                    <button onClick={() => handleNavigation("/about")}>
                      Learn
                    </button>
                  </div>
                  <div className={style.Btn}>
                    <button onClick={() => handleNavigation("/virox")}>
                      Virox
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.homeLogo}>
              <div className={style.Logo}>
                <div className={style.virusViper}>
                  <ThreeDModel
                    path={"/Models/homeVirusViperSkull.glb"}
                    speed={0.01}
                    position={[0, 0, 0]}
                    camera={[70, 3, 0]}
                    setmargin ={1.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
