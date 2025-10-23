import style from "./scanResultHead.module.css";

export default function ScanResultHead() {
  return (
    <>
      <div className={style.scanHead}>
        <div className={style.scanHeading}>
          <div className={style.heading}>
            <div className={style.virusviper}>
              <h1>Threat Analysis</h1>
            </div>
          </div>
        </div>
        <div className={style.scanSubHeading}>
          <div className={style.subHeading}>
            <div className={style.virusScan}>
              <p>
                "Detecting, Analyzing, and Neutralizing Cyber Threats with
                Cutting-Edge Technology"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
