import style from "./havenyMain.module.css";
import ThreeDModel from "../../../assets/model3D";

export default function HavenyHome() {
  return (
    <div className={style.main}>
      <div className={style.haveny}>
        <div className={style.homeMainSection}>
          <div className={style.hevenyIntro}>
            <div className={style.havenyInfo}>
              <div className={style.info}>
                <div className={style.head}>
                  <h1>Virusviper Haveny</h1>
                </div>
                <div className={style.head}>
                  <h4>
                    "Strengthen Minds, Heal Cyber Wounds with VirusViper."
                  </h4>
                </div>
                <div className={style.head}>
                  <p>
                    VirusViper Haveny is a sanctuary for cyber victims, guiding
                    them through recovery with a unique blend of mind and body
                    practices. Emphasizing meditation, exercise, and
                    spirituality, it strengthens resilience against cyber
                    threats. Through carefully chosen books and strategic mind
                    games, VirusViper empowers victims to regain mental clarity
                    and confidence, promoting healing. This holistic approach
                    not only defends against future risks but nurtures a
                    balanced, empowered mindset for life.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.havenyModel}>
              <div className={style.Model}>
                <ThreeDModel
                  path={"/Models/haveny3D.glb"}
                  speed={0.01}
                  position={[-3, -40, -1]}
                  camera={[10, 10, 10]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
