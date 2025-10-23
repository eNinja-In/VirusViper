import React, { useEffect, useState } from "react";
import style from "./meditation.module.css";
import ChatNavBar from "../../navBar-Footer/chatNavBar";
import CopyRight from "../../../assets/copyRight";
import { useNavigate } from "react-router-dom";
import ThreeDModel from "../../../assets/model3D";
import Error from "/serverError.png";
export default function Meditation() {
  const [meditationData, setMeditationData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/DB/meditationFrequency.json")
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject("Failed to fetch meditation data")
      )
      .then(setMeditationData)
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching meditation data:", error);
      });
  }, []);

  const handleButtonClick = (item) => {
    navigate("/haveny/meditation/Freqequency", { state: { item } });
  };

  return (
    <div className={style.main}>
      <div className={style.meditation}>
        <div className={style.navBar}>
          <ChatNavBar title="Peace" Heading="Peace" />
        </div>
        <div className={style.mainMeditation}>
          <div className={style.meditationModel}>
            <div className={style.model}>
              <ThreeDModel
                path={
                  "/Models/meditation/mesh_character_in_meditation__inside_merkaba.glb"
                }
                speed={0.01}
                position={[0, -1, 0]}
                camera={[0, 3, 10]}
                setmargin={1.4}
              />
            </div>
          </div>
          <div className={style.meditationOptions}>
            <div className={style.meditationItemsList}>
              {meditationData.map((item, index) => (
                <div key={index} className={style.meditationItems}>
                  <div className={style.itemSection}>
                    <div
                      className={style.itemModel}
                      style={{
                        backgroundImage: `url(${
                          item.imgLocation ? item.imgLocation : Error
                        })`,
                      }}
                      onClick={() => handleButtonClick(item)}
                    ></div>
                    <h3>{item.frequency}</h3>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <CopyRight />
        </div>
      </div>
    </div>
  );
}
