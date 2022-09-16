import React from "react";
import NavigationGlass from "../../components/NavigationGlass/NavigationGlass";
import plus from "../../assets/plus.svg";
import Punto from "../../components/TurnoGlass/Punto";
import edit from "../../assets/edit.svg";
import deleteicon from "../../assets/deleteicon.svg";
import { Modal } from "@mui/material";
import "./RecorridosScreen.css";
import "./Modal.css";
import { motion } from "framer-motion";
import close from "../../assets/close.svg";

export default function RecorridosScreen() {
  const [open, setOpen] = React.useState(false);
  const sendRecorrido = () => {};
  return (
    <>
      <div className="screen-blur container-screen">
        <NavigationGlass />
        <motion.div
          className="recorridos-screen"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="recorridos-screen__header">
            <div className="recorridos-screen__header__text">Recorridos</div>
            <div
              className="recorridos-screen__header__icon"
              onClick={() => {
                setOpen(true);
              }}
            >
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
        <Modal open={open}>
          <div className="recorridos-screen__modal">
            <span className="recorridos-screen__modal__close" onClick={()=>{setOpen(false)}}>
              <img src={close} alt="close" />
            </span>
            <div className="recorridos-screen__modal__header">Recorrido:</div>
            <div className="recorridos-screen__modal__body">
              <div className="recorridos-screen__modal__body__row1">
                <div className="recorridos-screen__modal__body__row1__input__label">
                  Nombre:
                </div>
                <input
                  type="text"
                  className="recorridos-screen__modal__body__row1__input"
                />
                <button
                  className="recorridos-screen__modal__body__row1__button"
                  onClick={sendRecorrido}
                >
                  Crear recorrido
                </button>
              </div>
              <div className="recorridos-screen__modal__body__row2">
                <div className="recorridos-screen__modal__body__row2__group">
                  <div className="recorridos-screen__modal__body__row2__group__text">
                    Seleccione los puntos:
                  </div>
                  <div className="recorridos-screen__modal__body__row2__group__puntos">
                    <span>Punto 1</span>
                    <span>Punto 2</span>
                    <span>Punto 3</span>
                    <span>Punto 4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
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
