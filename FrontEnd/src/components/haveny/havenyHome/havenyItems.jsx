import style from "./havenyItems.module.css";
import ThreeDModel from "../../../assets/model3D";
import { useNavigate } from "react-router-dom";

export default function HavenyItems() {
  const navigate = useNavigate();

  const items = [
    {
      path: "/haveny/spirituality",
      model: {
        path: "/Models/sprituality/lord_krishna3.glb",
        speed: 0.01,
        position: [0, -0.65, 0],
        camera: [10, 4, 10],
      },
      title: "Spirituality",
      description:
        "Connect with a deeper sense of purpose by building resilience and promoting inner healing. Embrace personal growth to overcome life’s challenges and restore balance within yourself. Nurture your mind, body, and spirit to unlock empowerment, inner peace, and fulfillment, creating a harmonious and meaningful life journey full of growth.",
    },
    {
      path: "/haveny/exercise",
      model: {
        path: "/Models/ball_joint_doll_Exercise.glb",
        speed: 0.01,
        position: [0, -0.75, 0],
        camera: [10, 4, 10],
      },
      title: "Exercise",
      description:
        "Boost your energy, release tension, and strengthen your body and mind. Embrace a balanced lifestyle that promotes physical health and mental well-being. By prioritizing self-care and vitality, you can achieve harmony, resilience, and fulfillment, creating a more energized and enriching life experience.",
    },
    {
      path: "/haveny/meditation",
      model: {
        path: "/Models/meditation/mesh_character_in_meditation__inside_merkaba.glb",
        speed: 0.01,
        position: [0, -0.75, 0],
        camera: [10, 4, 10],
      },
      title: "Meditation",
      description:
        "Calm your mind, reduce stress, and embrace daily practices that foster inner peace. Prioritize mental clarity and emotional well-being to cultivate resilience, balance, and harmony in your life. Create a tranquil space within yourself, allowing for relaxation, mindfulness, and a renewed sense of purpose each day.",
    },
    // { path: "", model: null, title: "", description: "" },
  ];

  return (
    <div className={style.main}>
      <div className={style.haveny}>
        <div className={style.havenySection}>
          {items.map((item, index) => (
            <div key={index} className={style.havenyItems}>
              <div className={style.item}>
                <div className={style.itemInfo}>
                  <div className={style.itemHead}>
                    <div className={style.itemHeading}>
                      {item.model && (
                        <ThreeDModel
                          path={item.model.path}
                          speed={item.model.speed}
                          position={item.model.position}
                          camera={item.model.camera}
                        />
                      )}
                    </div>
                  </div>
                  <div className={style.itemTail}>
                    <div className={style.itemName}>
                      <h1>{item.title}</h1>
                    </div>
                    <div className={style.itemDis}>
                      <p>{item.description}</p>
                    </div>
                    <div className={style.itemBtn}>
                      <button onClick={() => item.path && navigate(item.path)}>
                        {item.title}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
