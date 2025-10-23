import { useState } from "react";
import style from "./exercisePosition.module.css";
import ChatNavBar from "../../navBar-Footer/chatNavBar";
import CopyRight from "../../../assets/copyRight";

const yogaPoses = [
  {
    title: "Yoga Pose: Tittibhasana",
    src: "https://sketchfab.com/models/ccd408ccdbd741e59764d3fda9a675f5/embed?transparent=1&autostart=1&ui_hint=0",
  },
  {
    title: "Yoga Pose Parivrtta Trikonasana",
    src: "https://sketchfab.com/models/7c37c060b695426f8034fc034330ddee/embed?transparent=1&autostart=1&ui_hint=0",
  },
  {
    title: "Yoga Pose Halasana",
    src: "https://sketchfab.com/models/c8542bea8a4e4a18b8d51769fe75d268/embed?transparent=1&autostart=1&ui_hint=0",
  },
  {
    title: "Utthita Hasta Padasana to the wall",
    src: "https://sketchfab.com/models/ef9c2ef1fc894eaba5f462e9883e0cf8/embed?transparent=1&autostart=1&ui_hint=0",
  },
  {
    title: "Yoga Pose Halasana",
    src: "https://sketchfab.com/models/3c87be6d89204ea584ab567dbadc943d/embed?transparent=1&autostart=1&ui_hint=0",
  },
  {
    title: "Yoga Pose Paschimottanasana",
    src: "https://sketchfab.com/models/f0c39870108248438787f1d26e314bf1/embed?transparent=1&autostart=1&ui_hint=0",
  },
  {
    title: "Yoga Pose UpavistHa Konasana",
    src: "https://sketchfab.com/models/581397a650364419ace032c6bba08211/embed?transparent=1&autostart=1&ui_hint=0&dnt=1",
  },
  {
    title: "Yoga Pose Triang Mukaikapada Paschimottanasana",
    src: "https://sketchfab.com/models/e31cb2cd0946477bbae91cd0661b061a/embed?autostart=1&transparent=1&ui_hint=0",
  },
  {
    title: "Yoga Pose Upavistha Konasana",
    src: "https://sketchfab.com/models/e0d11fcd712f4e3599c96efc41bc211b/embed?autostart=1&transparent=1&ui_hint=0",
  },
  {
    title: "Yoga Pose Triang Mukaikapada Paschimottanasana",
    src: "https://sketchfab.com/models/a4ca442c9e2849bdaec239ab4672673f/embed?autostart=1&transparent=1&ui_hint=0",
  },
  {
    title: "Yoga Pose Supta Konasana",
    src: "https://sketchfab.com/models/03f0efbb3f0f4151be18aaa5f8806c77/embed?autostart=1&transparent=1&ui_hint=0",
  },
  {
    title: "Yoga Pose Supta Konasana",
    src: "https://sketchfab.com/models/c5c8c513d5f043a9a1c79b6abe48358a/embed?autostart=1&transparent=1&ui_hint=0",
  },
];

export default function ExercisePose() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const handleLoadMore = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % yogaPoses.length);
  };

  return (
    <div className={style.main}>
      <div className={style.navSlider}>
        <ChatNavBar title={"Yoga"} Heading={"Yoga Special"} />
      </div>
      <div className={style.exercisePose}>
        <div className={style.exerPosition}>
          {yogaPoses
            .slice(startIndex, startIndex + itemsPerPage)
            .map((pose, index) => (
              <div key={index} className={style.yoga}>
                <div className={style.yogaItem}>
                  <div className="sketchfab-embed-wrapper">
                    <iframe
                      title={pose.title}
                      frameBorder="0"
                      allowFullScreen
                      mozAllowFullScreen="true"
                      webkitAllowFullScreen="true"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      src={pose.src}
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className={style.loadBtn}>
        <button onClick={handleLoadMore} className={style.loadMoreButton}>
          Load More
        </button>
      </div>
      <div className={style.copyRight}>
        <CopyRight />
      </div>
    </div>
  );
}
