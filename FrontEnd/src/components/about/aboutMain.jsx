import style from "./aboutMain.module.css";
import AboutVirus from "./about";
import Feedback from "./aboutFeedback";
import JoinVirus from "./aboutJoin";
export default function About() {
  const auth = JSON.parse(localStorage.getItem("user"));
  document.title = "About"
  return (
    <>
      <div className={style.main}>
        <div className={style.aboutSection}>
          <div className={style.aboutVirusViperSection}>
            <div className={style.aboutVirus}>
              <div className={style.virusViper}>
                <AboutVirus />
              </div>
            </div>
          </div>
          <div className={style.aboutVisionSection}>
            <div className={style.aboutVision}>
              <div className={style.vision}></div>
            </div>
          </div>
          {auth ? ( // Conditional rendering syntax fixed
            <div className={style.aboutFeedback}>
              <Feedback />
            </div>
          ) : (
            <div className={style.aboutJoinSection}>
              <JoinVirus />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
