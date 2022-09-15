import React from "react";
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
        <NavigationGlassItem icon="../" text="Inicio"/>
      </div>
    </div>
  );
}
