import style from "./scanResultAttributes.module.css";
import { Safe, Malicious, Suspicious, Undetected } from "../../../../assets/SVG";

export default function ScanAttributes({ attributes }) {
  return (
    <>
      <div className={style.scanMainResult}>
        <div className={style.scanMainResultSection}>
          <div className={style.scanMainResultDetails}>
            <div className={style.scanMainResultDetailsItems}>
              {Object.entries(attributes).map(([key, value]) => (
                <div className={style.ItemKey} key={key}>
                  <div className={style.itemSection}>
                    <div className={style.ItemDetails}>
                      <div className={style.item}>
                        <p>{key}</p>
                      </div>
                    </div>

                    <div className={style.ItemDetails}>
                      <div className={style.item}>
                        <div className={style.itemSafeCheck}>
                          <div className={style.safeIcon}>
                            <div className={style.icon}>
                              {value.category === "harmless" ? (
                                <p>
                                  <Safe />
                                </p>
                              ) : value.category === "undetected" ? (
                                <p>
                                  <Undetected />
                                </p>
                              ) : value.category === "suspicious" ? (
                                <p>
                                  <Suspicious />
                                </p>
                              ) : value.category === "malicious" ? (
                                <p>
                                  <Malicious />
                                </p>
                              ) : (
                                value.category || "N/A"
                              )}
                            </div>
                          </div>
                          <div className={style.safeInfo}>
                            <div className={style.clearOrNot}>
                              <p>{value.result || "N/A"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
