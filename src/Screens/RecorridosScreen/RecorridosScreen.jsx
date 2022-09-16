import React from "react";
import NavigationGlass from "../../components/NavigationGlass/NavigationGlass";
import plus from "../../assets/plus.svg";
import Punto from "../../components/TurnoGlass/Punto";
import edit from "../../assets/edit.svg";
import deleteicon from "../../assets/deleteicon.svg";
import { motion } from "framer-motion";

import "./RecorridosScreen.css";
export default function RecorridosScreen() {
  return (
    <div className="screen-blur container-screen">
      <NavigationGlass />
      <motion.div className="recorridos-screen"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
        <div className="recorridos-screen__header">
          <div className="recorridos-screen__header__text">Recorridos</div>
          <div className="recorridos-screen__header__icon">
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="recorridos-screen__body">
          <RecorridosItem recorrido="recorrido 1234" />
          <RecorridosItem recorrido="Arte europeo XV" />
          <RecorridosItem recorrido="Arte europeo XV" />
          <RecorridosItem recorrido="Arte europeo XV" />
          <RecorridosItem recorrido="Arte europeo XV" />
          <RecorridosItem recorrido="Arte europeo XV" />
          <RecorridosItem recorrido="Arte europeo XV" />
          <RecorridosItem recorrido="Arte europeo XV" />
          <RecorridosItem recorrido="Arte europeo XV" />
          <RecorridosItem recorrido="Arte europeo XV" />
        </div>
        </motion.div>
    </div>
  );
}

function RecorridosItem(props) {
  return (
    <div className="recorridos-screen__body__item">
      <div className="recorridos-screen__body__row">
        <div className="recorridos-screen__body__row__icon">
          <Punto color="#9F51DD" />
        </div>
        <div className="recorridos-screen__body__row__text">
          {props.recorrido}
        </div>
      </div>
      <div className="recorridos-screen__body__row2">
        <div className="recorridos-screen__body__row2__button">
          <p>Asignar Turno</p>
        </div>
        <div className="recorridos-screen__body__row2__button__group">
          <div className="recorridos-screen__body__row2__button__group__edit">
            <img src={edit} alt="" />
          </div>
          <div className="recorridos-screen__body__row2__button__group__delete">
            <img src={deleteicon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
