import React from "react";
import homeIcon from "../../assets/homeIcon.svg";
import museumicon from "../../assets/museumicon.svg";
import beepconsicon from "../../assets/beepconIcon.svg";
import recorridosicon from "../../assets/recorridosicon.svg";

import "./NavigationGlass.css";
import { Link } from "react-router-dom";

function NavigationGlassItem(props) {
  return(
    <div className="navigation-glass__item">
      <div className="navigation-glass__item__icon">
        <img src={props.icon} alt="icon" />
      </div>
      <Link style={{}} unselectable to={props.route}>
      <div className="navigation-glass__item__text">
        {props.text}
      </div>
      </Link>
    </div>
  )
}

export default function NavigationGlass() {
  return (
    <div className="navigation-glass-container">
      <div className="navigation-glass">
        <div className="navigation-glass__title">MuseumHub</div>
        <NavigationGlassItem icon={homeIcon} text="Inicio" route="/" />
        <NavigationGlassItem icon={museumicon} text="Tu museo" route="/museo"/>
        <NavigationGlassItem icon={beepconsicon} text="Beepcons" route="/beepcons" />
        <NavigationGlassItem icon={recorridosicon} text="Tus recorridos" route="/recorridos" />
        <NavigationGlassItem icon={recorridosicon} text="Turnos" route="/turnos" />
      </div>
    </div>
  );
}
