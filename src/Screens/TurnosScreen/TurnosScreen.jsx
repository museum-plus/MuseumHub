import React from "react";
import NavigationGlass from "../../components/NavigationGlass/NavigationGlass";
import "./TurnosScreen.css";
import plus from "../../assets/plus.svg";
import Punto from "../../components/TurnoGlass/Punto";
import edit from "../../assets/edit.svg";
import clock from "../../assets/clock.svg";
import deleteicon from "../../assets/deleteicon.svg";

import { motion } from "framer-motion"

export default function TurnosScreen() {
  return (
    <div className="screen-blur turnos-screen-container">
      <NavigationGlass />
      <motion.div className="turnos-screen"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <div className="turnos-screen__header">
          <div className="turnos-screen__header__text">Turnos</div>
          <div className="turnos-screen__header__icon">
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="turnos-screen__body">
          <TurnosItem visitante="Daniel Chavez" recorrido="Arte europeo XV" horario="18:00 - 19:30" />
          <TurnosItem visitante="Daniel Chavez" recorrido="Arte europeo XV" horario="18:00 - 19:30" />
          <TurnosItem visitante="Daniel Chavez" recorrido="Arte europeo XV" horario="18:00 - 19:30" />
          <TurnosItem visitante="Daniel Chavez" recorrido="Arte europeo XV" horario="18:00 - 19:30" />
          <TurnosItem visitante="Daniel Chavez" recorrido="Arte europeo XV" horario="18:00 - 19:30" />
          <TurnosItem visitante="Daniel Chavez" recorrido="Arte europeo XV" horario="18:00 - 19:30" />
          <TurnosItem visitante="Daniel Chavez" recorrido="Arte europeo XV" horario="18:00 - 19:30" />
          <TurnosItem visitante="Daniel Chavez" recorrido="Arte europeo XV" horario="18:00 - 19:30" />
          <TurnosItem visitante="Daniel Chavez" recorrido="Arte europeo XV" horario="18:00 - 19:30" />
          <TurnosItem visitante="Daniel Chavez" recorrido="Arte europeo XV" horario="18:00 - 19:30" />
        </div>
      </motion.div>
    </div>
  );
}

function TurnosItem(props) {
  return (
    <div className="turnos-screen__body__item">
      <div className="turnos-screen__body__row">
        <div className="turnos-screen__body__row__icon">
          <Punto color="#9F51DD" />
        </div>
        <div className="turnos-screen__body__row__text">
          {props.visitante}
        </div>
        <div className="turnos-screen__body__row__group">
          <div className="turnos-screen__body__row__group__text">
            {props.horario}
          </div>
          <div className="turnos-screen__body__row__group__icon">
            <img src={clock} alt="..." />
          </div>
        </div>
      </div>
      <div className="turnos-screen__body__row2">
        <div className="turnos-screen__body__row2__text">
          {props.recorrido}
        </div>
        <div className="turnos-screen__body__row2__button__group">
          <div className="turnos-screen__body__row2__button__group__edit">
            <img src={edit} alt="..." />
          </div>
          <div className="turnos-screen__body__row2__button__group__delete">
            <img src={deleteicon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
