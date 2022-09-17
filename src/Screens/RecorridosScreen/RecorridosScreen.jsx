import React from "react";
import NavigationGlass from "../../components/NavigationGlass/NavigationGlass";
import plus from "../../assets/plus.svg";
import Punto from "../../components/TurnoGlass/Punto";
import edit from "../../assets/edit.svg";
import deleteicon from "../../assets/deleteicon.svg";
import { Box, Modal } from "@mui/material";
import "./RecorridosScreen.css";
import "./Modal.css";
import { motion } from "framer-motion";
import close from "../../assets/close.svg";
import RecorridoGlassSelected from '../../components/RecorridoGlass/RecorridoGlassSelect'
import { getBeepcons } from "../../database/getBeepcons";
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
import BeepconsGlassItem from "../../components/BeepconsGlass/BeepconsGlassItem";
export default function RecorridosScreen() {
  const [beepcons, setBeepcons] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [recorridos, setRecorridos] = React.useState([]);
  React.useEffect(() => {
    async function hola() {
      setBeepcons(await getBeepcons());
    }
    hola();
  }, []);

  const [userInput, setUserInput] = React.useState({
    id: "",
    nombre: "",
    descripcion: "",
    puntos: [],
  });


  const getRecorridos = async () => {
    const recorridosCollection = collection(db, "recorridos");
    const recorridosSnapshot = await getDocs(recorridosCollection);
    const recorridosList = recorridosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setRecorridos(recorridosList);
  };
  const sendRecorrido = async () => {
    // setOpen(false);
    // try {
    //   const docRef = await addDoc(collection(db, "recorridos"), {
    //     nombre: userInput.nombre,
    //     descripcion: userInput.descripcion,
    //     puntos: [

    //     ],
    //   });


    //   //Limpio los campos
    //   setUserInput({
    //     id: "",
    //     nombre: "",
    //     descripcion: "",
    //     puntos:[

    //     ],
    //   });
    // } catch (e) {
    //   console.log("ERROR ! =", e);
    // }
  };
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
              onClick={async () => {
                setOpen(true),
                  setBeepcons(await getBeepcons())
                console.log(beepcons)
              }}
            >
              <img src={plus} alt="" />
            </div>
          </div>
          <div className="recorridos-screen__body">
            {recorridos.map((recorrido) => (
              <RecorridosItem
                key={recorrido.id}
                package={{
                  nombre: recorrido.nombre,
                  descripcion: recorrido.descripcion,
                  posicion: recorrido.posicion,
                  id: recorrido.id,
                }}
              />
            ))}
          </div>
        </motion.div>
        <Modal open={open}>
          <div className="recorridos-screen__modal">
            <span className="recorridos-screen__modal__close" onClick={() => { setOpen(false) }}>
              <img src={close} alt="close" />
            </span>
            <div className="recorridos-screen__modal__header">Recorrido:</div>
            <div className="recorridos-screen__modal__body">
              <div className="recorridos-screen__modal__body__row1">
                <div className="recorridos-screen__modal__body__row1__input__label">
                  Nombre:
                </div>
                <input
                  value={userInput.nombre}
                  type="text"
                  className="recorridos-screen__modal__body__row1__input"
                  onChange={(e) => {
                    setUserInput({
                      ...userInput,
                      nombre: e.target.value
                    });
                  }}
                />
                <div className="recorridos-screen__modal__body__row1__input__label">
                  Descripcion:
                </div>
                <input
                  value={userInput.descripcion}
                  type="text"
                  className="recorridos-screen__modal__body__row1__input"
                  onChange={(e) => {
                    setUserInput({
                      ...userInput,
                      descripcion: e.target.value
                    });
                  }}
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
                        {beepcons.map((beepcon) => (
                          <RecorridoGlassSelected
                            key={beepcon.id}
                            package={{
                              nombre: beepcon.nombre,
                              descripcion: beepcon.descripcion,
                              posicion: beepcon.posicion,
                              id: beepcon.id,
                            }}
                            color="#fff"
                          />
                        ))}
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
