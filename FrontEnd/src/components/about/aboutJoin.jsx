import style from "./aboutJoin.module.css";
import { useNavigate } from "react-router-dom";
export default function JoinVirus() {
  const auth = JSON.parse(localStorage.getItem("user")); // Parse localStorage 'user' item
  const navigate = useNavigate();

  return (
    <div className={style.main}>
      <div className={style.join}>
        {auth ? (
          <>
            <div className={style.joinHead}>
              <div className={style.joinHea}>
                <h1>Welcome {auth.user.name ? auth.user.name : "User"}</h1>
              </div>
            </div>
            <div className={style.joinLower}>
              <p>
                "Welcome to VirusViper. Enjoy the internet safely, equipped to
                crush every lurking threat and stay ahead of the danger."
              </p>
            </div>
          </>
        ) : (
          <>
            <div className={style.joinHead}>
              <div className={style.joinHea}>
                <h1>Join Virusviper</h1>
              </div>
              <div className={style.joinDis}>
                <p>
                  "Join VirusViper, your ultimate defense against cyber
                  criminals. Arm yourself with cutting-edge tools and knowledge
                  to stay ahead of online threats and safeguard your digital
                  world."
                </p>
              </div>
            </div>
            <div className={style.joinLower}>
              <button
                className={style.loginButton}
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className={style.signInButton}
                onClick={() => navigate("/signup")}
              >
                SignUp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

