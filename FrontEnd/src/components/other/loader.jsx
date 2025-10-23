import { useState, useEffect } from "react";
import style from "./loader.module.css";
import logo from "/logo.png";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={style.main}>
          <div className={style.Loader}>
            <div className={style.loaderSection}>
              <div className={style.loadingLogo}>
                <img src={logo} alt="Loading..." />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
