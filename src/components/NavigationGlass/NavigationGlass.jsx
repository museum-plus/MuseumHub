import React from "react";
import homeIcon from "../../assets/homeIcon.svg";

import "./NavigationGlass.css";

function NavigationGlassItem(props) {
  return(
    <div className="navigation-glass__item">
      <div className="navigation-glass__item__icon">
        <img src={props.icon} alt="icon" />
      </div>
      <div className="navigation-glass__item__text">
        {props.text}
      </div>
    </div>
  )
}

export default function NavigationGlass() {
  return (
    <div className="navigation-glass-container">
      <div className="navigation-glass">
        <h2>MuseumHub</h2>
        <NavigationGlassItem icon={homeIcon} text="Inicio"/>
        
      </div>
    </div>
  );
}
