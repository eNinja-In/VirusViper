import HomeMain from "./home";
import Scanner from "../services/scanner/scanner";
import TipsTricks from "../tipsTricks/tips";
export default function Home() {
  document.title = "Virusviper"

  return (
    <>
      <HomeMain />
      <Scanner />
      <div className="trick" style={{display : "flex", width : "100%", flexWrap : "wrap", justifyContent : "center", alignItems : "center"}}>
      <TipsTricks />  
      </div>
    </>
  );
}
