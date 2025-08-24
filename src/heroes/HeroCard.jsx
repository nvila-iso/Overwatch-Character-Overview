import { useState } from "react";

const HeroCard = ({ hero }) => {
  const getRoleIcon = () => {
    if (hero.role === "tank") {
      return "/src/public/tank-icon.svg";
    } else if (hero.role === "damage") {
      return "/src/public/damage-icon.svg";
    } else {
      return "/src/public/support-icon.svg";
    }
  };

  return (
    <div className="hero-card-outer">
      <div className="hero-card-inner">
        <div className="top-section">
          <div className="role-icon">
            <img src={getRoleIcon()}></img>
          </div>
          <div className="hero-name inter-regular">
            <p>{hero.name}</p>
          </div>
        </div>
        <div className="bottom-section">
          <img src={hero.portrait}></img>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
