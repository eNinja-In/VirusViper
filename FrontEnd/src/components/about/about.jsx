import style from "./about.module.css";
import React, { useRef } from "react";
import ThreeDModel from "../../assets/model3D";

export default function AboutVirus() {
  const auth = React.useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  }, []);

  return (
    <div className={style.main}>
      <div className={style.virusIntro}>
        <div className={style.IntroUpper}>
          <div className={style.IntroWelcome}>
            <div className={style.virusviper}>
              <h1>
                Welcome{" "}
                {auth?.user?.name
                  ? auth.user.name.includes(" ")
                    ? auth.user.name
                        .split(" ")
                        .map((word) => word[0].toUpperCase())
                        .join("") // Initials display
                    : auth.user.name.length > 6
                    ? auth.user.name.slice(0, 2).toUpperCase() // First two letters
                    : auth.user.name
                  : ""}
              </h1>
              <h4>
                "Lurking dangers exposed: VirusViper stands guard, protecting
                you from hidden cyber threats."
              </h4>
            </div>
          </div>
        </div>
        <div className={style.IntroLower}>
          <div className={style.Introduction}>
            <div className={style.virus}>
              <div className={style.info}>
                <h1>VirusViper</h1>
              </div>
              <div className={style.info}>
                <p>
                  A comprehensive platform dedicated to spreading cybersecurity
                  awareness to everyone, whether they are tech enthusiasts or
                  not. Our mission is to educate and inform all individuals
                  about the latest cyber threats and best practices for online
                  safety. By offering accessible, easy-to-understand content,
                  VirusViper bridges the gap between technical and non-technical
                  audiences, empowering users with the knowledge needed to
                  protect their digital lives. From detailed articles to
                  practical tips, our platform is designed to keep you updated
                  and secure in the ever-evolving world of cybersecurity. Trust
                  VirusViper to be your guide in navigating the complexities of
                  digital security.
                </p>
              </div>
            </div>
            <div className={style.virusLogo}>
              <div className={style.Logo}>
                <ThreeDModel
                  path={"/Models/VirusViper.glb"}
                  speed={0.01}
                  position={[0, 0, 0]}
                  camera={[50, 15, 100]}
                  setmargin={1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
