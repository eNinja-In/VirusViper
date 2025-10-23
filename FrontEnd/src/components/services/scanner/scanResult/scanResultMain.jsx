import { useLocation } from "react-router-dom";
import style from "./scanResultMain.module.css";
import ScanResultHead from "./scanResultHead";
import ScanAnalysis from "./scanResultAnalysis";
import ScanAttributes from "./scanResultAttributes";

export default function ScanResult() {
  const location = useLocation();
  const result = location.state?.result;

  if (!result) {
    return (
      <div className={style.main}>
        <h2>No Result Found</h2>
        <p>Please scan a URL to view the result.</p>
      </div>
    );
  }

  const stats = result?.data?.attributes?.stats || {};
  const attributes = result?.data?.attributes?.results || {};
  const meta = result?.meta.url_info.url || {};

  // if (Object.keys(stats).length === 0) {
  //   return (
  //     <div className={style.main}>
  //       <h2>No Valid Stats Found</h2>
  //       <p>The scanned result does not contain the required stats.</p>
  //     </div>
  //   );
  // }

  // if (Object.keys(attributes).length === 0) {
  //   return (
  //     <div className={style.main}>
  //       <h2>No Valid Attributes Found</h2>
  //       <p>The scanned result does not contain the required attributes.</p>
  //     </div>
  //   );
  // }

  return (
    <div className={style.main}>
      <div className={style.scanResult}>
        <ScanResultHead />
        <div className={style.scanMain}>
          <ScanAnalysis stats={stats} meta={meta} />
          <ScanAttributes attributes={attributes} />
        </div>
      </div>
    </div>
  );
}
