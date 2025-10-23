import style from "./haveny.module.css";
import HavenyHome from "./havenyHome/havenyMain";
import HavenyItems from "./havenyHome/havenyItems";
export default function Haveny() {
  document.title = "Haveny"

  return (
    <>
      <HavenyHome />
      <HavenyItems />
    </>
  );
}
