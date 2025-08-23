import "../css/Main.css";
import Navi from "./Navi";
import FilterDisplay from "./FilterDisplay";
import HeroDisplay from "../heroes/HeroDisplay";

const Display = () => {
  return (
    <>
      <div className="container">
        <Navi />
        <FilterDisplay />
        <HeroDisplay />
      </div>
    </>
  );
};

export default Display;
