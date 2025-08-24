import "../css/Main.css";
import handleRoleSelect from "../components/handleRoleSelect";
const FilterDisplay = () => {
  return (
    <>
      <div className="role-select inter-regular">
        <div
          onClick={handleRoleSelect}
          className="tank-select role-select-button"
        >
          <p>tank</p>
        </div>
        <div className="damage-select role-select-button">
          <p>damage</p>
        </div>
        <div className="support-select role-select-button">
          <p>support</p>
        </div>
      </div>
      <div className="reset-button inter-regular">
        <p>reset</p>
      </div>
    </>
  );
};

export default FilterDisplay;
