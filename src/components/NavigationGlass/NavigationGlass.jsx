import React from "react";
import homeIcon from "../../assets/homeIcon.svg";
import museumicon from "../../assets/museumicon.svg";
import beepconsicon from "../../assets/beepconIcon.svg";
import recorridosicon from "../../assets/recorridosicon.svg";

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
        <div className="navigation-glass__title">MuseumHub</div>
        <NavigationGlassItem icon={homeIcon} text="Inicio"/>
        <NavigationGlassItem icon={museumicon} text="Tu museo"/>
        <NavigationGlassItem icon={beepconsicon} text="Beepcons"/>
        <NavigationGlassItem icon={recorridosicon} text="Tus recorridos"/>


      </div>
    </div>
  );
}
