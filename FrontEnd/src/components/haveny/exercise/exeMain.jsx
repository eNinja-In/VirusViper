import ThreeDModel from "../../../assets/model3D";
import style from "./exeMain.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChatNavBar from "../../navBar-Footer/chatNavBar";

export default function Exercise() {
  const [isDropOptionVisible, setDropOptionVisible] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [position, setPosition] = useState([]);
  const [isPath, setPath] = useState("");
  const [setMargin, setSetMargin] = useState();
  const [camera, setCamera] = useState([]);
  const [modelNo, setModelNo] = useState();
  let rotationSpeed = 0.01;

  useEffect(() => {
    setPath("/Models/exercise/girl_gameready_anim.glb");
    setPosition([0, -1.8, 0]);
    setSetMargin(1.4);
    setModelNo(1);
    setCamera([0, 3, 10]);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/service", label: "Services" },
    { path: "/haveny", label: "Haveny" },
    { path: "/about", label: "About" },
  ];

  const modelOptions = [
    {
      path: "/Models/exercise/girl_gameready_anim.glb",
      margin: 1.1,
      position: [0, -2, 0],
      camera: [0, 40, 0],
    },
    {
      path: "/Models/ball_joint_doll_Exercise.glb",
      position: [0, -1, 0],
    },
    {
      path: "/Models/exercise/female_character.glb",
      margin: 5,
      position: [0, -1.3, 0],
    },
    {
      path: "/Models/exercise/leopard_girl_streching.glb",
      position: [0, -1.9, 0],
      camera: [0, 4, 100],
    },
    {
      path: "/Models/exercise/low_poly_boxing_girl.glb",
      margin: 2,
      position: [0, -1.2, 0],
      camera: [0, 0, 100],
    },
  ];

  const toggleNavVisibility = () => {
    setDropOptionVisible(!isDropOptionVisible);
  };

  const toggleChatSection = () => {
    setIsChatVisible((prevState) => !prevState);

  };

  return (
    <>
      <div className={style.main}>
        {/* Side navigation bar */}
        <div className={style.navBar}>
          <ChatNavBar title={"Healthy"} Heading={"Healthy World"} />
        </div>

        {/* Main content section with 3D model and navigation */}
        <div className={style.geetaHome}>
          {/* Main section displaying the 3D model */}
          <div className={style.mainChatSection}>
            <div className={style.chatBotSection}>
              <div className={style.yogaBar}>
                <div className={style.yogaBtn} onClick={toggleChatSection}>
                  {isChatVisible ? "Hide" : "Show More"}
                </div>
              </div>
              <div className={style.bot3DSection}>
                <div className={style.threeDModel}>
                  <ThreeDModel
                    path={isPath}
                    speed={rotationSpeed}
                    position={position}
                    camera={camera}
                    setmargin={setMargin}
                  />
                </div>
              </div>
              <div
                className={style.ChatSection}
                style={{ display: isChatVisible ? "flex" : "none" }}
              >
                <div className={style.healthyOption}>
                  <div className={style.optionList}>
                    <Link to={"/haveny/exercise/ExercisePose"}>
                      <div className={style.listItem}>
                        <p>Yoga Special</p>
                      </div>
                    </Link>
                    <Link>
                      <div className={style.listItem}>
                        <p>Diet</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={style.model}>
                  <ThreeDModel
                    path={"/Models/ball_joint_doll_Exercise.glb"}
                    speed={rotationSpeed}
                    position={[0, -0.9, 0]}
                    camera={camera}
                    setmargin={0.8}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Footer section with copyright */}
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
