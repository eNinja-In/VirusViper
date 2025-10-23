import style from "./scanResultAnalysis.module.css";
import {
  Safe,
  Malicious,
  Suspicious,
  Undetected,
} from "../../../../assets/SVG";
import safe from "/threatScan/safe.jpg";
import unSafe from "/threatScan/unsafe.jpg";

export default function ScanAnalysis({ stats, meta }) {
  let totalSum = 0; // Total sum of all values
  let undetectedHarmlessSum = 0; // Total of undetected and harmless values
  let maliciousSuspicious = 0; // Array to store keys with malicious or suspicious > 0
  let malicious = 0;
  let suspicious = 0;

  console.log(meta);
  Object.entries(stats).forEach(([key, value]) => {
    totalSum += value; // Add to total sum

    if (key === "undetected" || key === "harmless") {
      undetectedHarmlessSum += value;
    }

    if ((key === "malicious" || key === "suspicious") && value > 0) {
      maliciousSuspicious += value;
    }
    if (key === "malicious" && value > 0) {
      malicious = value;
    }
    if (key === "suspicious" && value > 0) {
      suspicious = value;
    }
  });
  return (
    <>
      <div className={style.scanMainAnalysis}>
        <div className={style.analysis}>
          <div className={style.analysisResult}>
            <div className={style.analysisResultSection}>
              <div className={style.scanResultChart}>
                <div clasName={style.resultItem}>
                  <div className={style.chartCircle}>
                    <div className={style.Circle}>
                      <div className={style.upperResult}>
                        <div className={style.totalMalSus}>
                          {maliciousSuspicious}
                        </div>
                        <hr />
                        <div className={style.lowerResult}>{totalSum}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.analysisDetails}>
            <div className={style.analysisDetailTop}>
              <div className={style.safeOrNot}>
                {malicious > 0 || suspicious > 0 ? (
                  <div className={style.safeSection}>
                    <div className={style.notSafe}>
                      <p>
                        <Undetected />
                      </p>
                      <p>
                        {" "}
                        Caution: Suspicious behavior detected. Verify your
                        actions before proceeding.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className={style.safeSection}>
                    <div className={style.safetyResult}>
                      <p>
                        <Safe />
                      </p>
                      <p>
                        You're Secure! No threats detected, feel free to browse
                        safely.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={style.analysisDetailMid}>
              <div className={style.target}>
                <p>
                  {" "}
                  <strong>Target : </strong>
                  {meta}
                </p>
              </div>
            </div>
            <div className={style.analysisDetailLow}>
              <div className={style.ifMalSus}>
                {malicious > 0 || suspicious > 0 ? (
                  <div className={style.dangerResult}>
                    {malicious > 0 && (
                      <div className={style.dangerItem}>
                        <div className={style.dangerLogo}>
                          <Malicious />
                        </div>
                        <div className={style.dangerName}>Malicious</div>
                      </div>
                    )}
                    {suspicious > 0 && (
                      <div className={style.dangerItem}>
                        <div className={style.dangerLogo}>
                          <Suspicious />
                        </div>
                        <div className={style.dangerName}>Suspicious</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={style.noDanger}>{""}</div>
                )}
              </div>
            </div>
          </div>
          <div className={style.resultTag}>
            <div className={style.safeOrNotJPG}>
              {malicious > 0 || suspicious > 0 ? (
                <img src={unSafe} alt="" />
              ) : (
                <img src={safe} alt="" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
