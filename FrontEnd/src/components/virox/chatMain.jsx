import style from "./chatMain.module.css";
import ChatNavBar from '../navBar-Footer/chatNavBar'
import ViroxChat from "./chatVirox";
import ThreeDModel from "../../assets/model3D";
import React, { useEffect, useRef, useState } from "react";

export default function Virox() {
  let backPath = "/virox/viroxBackGround4.jpg";
  const [position, setposition] = useState([]);
  const [ispath, setpath] = useState("");
  const [setmargin, setSetmargin] = useState();
  const [camera, setcamera] = useState([]);
  let rotationSpeed = 0.01;

  document.title = "Health";

  useEffect(() => {
    setpath("/Models/virox/guyver-thriller.glb");
    // setpath("/Models/virox/viroxModel.glb");
    // setpath("/Models/virox/girl_cartoon_cyberr.glb");
    setposition([0, -1, 0]);
    setSetmargin(2.6);
    setcamera([10, 4, 70]);
  }, []);
  document.title = "Virox";
  return (
    <>
      <div className={style.main}>
        <div className={style.viroxHome}>
          <div className={style.navSection}>
            <div className={style.navBar}>
              <ChatNavBar title={"Virox"} Heading={"Virox"} />
            </div>
          </div>
          <div className={style.mainChatSection}>
            <div className={style.chatBotSection}>
              <div className={style.bot3DSection}>
                <div
                  className={style.threeDModel}
                  style={{ backgroundImage: `url(${backPath})` }}
                >
                  <ThreeDModel
                    path={ispath}
                    speed={rotationSpeed}
                    position={position}
                    camera={camera}
                    setmargin={setmargin}
                  />
                </div>
              </div>
              <div className={style.ChatSection}>
                <div className={style.chatApp}>
                  <ViroxChat />
                </div>
              </div>
            </div>
          </div>
          <div className={style.copyRight}>
            <div className={style.copyRightVirusViper}>
              <p>copyRight&copy;: All Rights are reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
