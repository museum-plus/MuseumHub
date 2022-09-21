import React, { useContext } from "react";
import "./BeepconsGlass.css";
import Punto from "../TurnoGlass/Punto";
import BeepconsGlassItem from "./BeepconsGlassItem";
import { TextareaAutosize } from "@mui/material";
import { Modal } from "@mui/material";
import plus from "../../assets/plus.svg";
import close from "../../assets/close.svg";
import { motion } from "framer-motion";
import "./beepcons-modal.css";
import { getBeepcons } from "../../database/getBeepcons";
import { RefreshButton } from "../../database/getBeepcons";
import { db } from "../../database/db";
import {
  collection,
  addDoc,
  doc,
  onSnapshot,
  getDocs,
  setDoc,
  query,
  getDoc,
  where,
  documentId,
} from "firebase/firestore";
import { useRef } from "react";
import ThemeContext from "../../context/theme-context";
import PlusIcon from "../../assets/PlusIcon";
import CloseIcon from "../../assets/CloseIcon";

export default function BeepconsGlass() {
  const { theme, handleTheme } = useContext(ThemeContext);
  const [open, setOpen] = React.useState(false);
  const [beepcons, setBeepcons] = React.useState([]);
  const [userInput, setUserInput] = React.useState({
    id: "",
    nombre: "",
    descripcion: "",
    posicion: {
      x: 0,
      y: 0,
    },
  });
  const openModal = () => {
    setOpen(true);
  };

  const getterBeepcons = async () => {
    setBeepcons(await getBeepcons());
  };

  React.useEffect(() => {
    async function hola() {
      setBeepcons(await getBeepcons());
    }
    hola();
  }, []);

  const sendBeepcon = async () => {
    setOpen(false);
    try {
      const docRef = await addDoc(collection(db, "beepcons"), {
        nombre: userInput.nombre,
        descripcion: userInput.descripcion,
        posicion: {
          x: userInput.posicion.x,
          y: userInput.posicion.y,
        },
      });

      setBeepcons(await getBeepcons());
      //Limpio los campos
      setUserInput({
        id: "",
        nombre: "",
        descripcion: "",
        posicion: {
          x: 0,
          y: 0,
        },
      });
    } catch (e) {
      console.log("ERROR ! =", e);
    }
  };

  return (
    <>
      <motion.div
        className="beepcons-glass"
        style={theme.glass}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="beepcons-glass__header">
          <div className="beepcons-glass__header__text">
            Beepcons
            <div className="beepcons-icon-punto">
              <Punto color="#fff" />
            </div>
          </div>
          <RefreshButton refresh={() => { getterBeepcons() }} />
          <div className="beepcons-glass__header__icon" onClick={openModal}>
            <PlusIcon/>
          </div>
        </div>
        <div className="beepcons-glass__body">
          {beepcons.map((beepcon) => (
            <BeepconsGlassItem
              key={beepcon.id}
              package={{
                nombre: beepcon.nombre,
                descripcion: beepcon.descripcion,
                posicion: beepcon.posicion,
                id: beepcon.id,
                actualizar: () => { getterBeepcons() }
              }}
              color="#fff"
            />
          ))}
        </div>
      </motion.div>
      <Modal open={open}>
        <div className="beepcons_modal">
          <span
            className="recorridos-screen__modal__close"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon/>
          </span>
          <div className="beepcons-modal__row1">
            <div className="beepcons-modal__title">Beepcon</div>
            <div className="beepcons-modal__inputs">
              <span className="beepcons-modal__input1__label">Nombre</span>
              <TextareaAutosize
                type="text"
                className="beepcons-modal__input2"
                value={userInput.nombre}
                onChange={(e) => {
                  setUserInput({ ...userInput, nombre: e.target.value });
                }}
              />
              <div className="beepcons-modal__input__group">
                <span className="beepcons-modal__input2__label">
                  Descripción
                </span>
                <TextareaAutosize
                  aria-label="empty textarea"
                  className="beepcons-modal__input2"
                  placeholder=""
                  value={userInput.descripcion}
                  onChange={(e) => {
                    setUserInput({
                      ...userInput,
                      descripcion: e.target.value,
                    });
                  }}
                />
                <input
                  type="text"
                  placeholder="posicion x"
                  className="beepcons-modal__input__test"
                  value={userInput.posicion.x}
                  onChange={(e) => {
                    setUserInput({
                      ...userInput,
                      posicion: {
                        ...userInput.posicion,
                        x: e.target.value,
                      },
                    });
                  }}
                />
                <input
                  type="text"
                  placeholder="posicion y"
                  className="beepcons-modal__input__test"
                  value={userInput.posicion.y}
                  onChange={(e) => {
                    setUserInput({
                      ...userInput,
                      posicion: {
                        ...userInput.posicion,
                        y: e.target.value,
                      },
                    });
                  }}
                />

                <motion.button
                  className="beepcons-modal__button"
                  onClick={sendBeepcon}
                >
                  Añadir Beepcon
                </motion.button>
              </div>
            </div>
          </div>

          <div className="beepcons-modal__row2">

          </div>
        </div>
      </Modal>
    </>
  );
}