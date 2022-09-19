import React from "react";
import NavigationGlass from "../../components/NavigationGlass/NavigationGlass";
import plus from "../../assets/plus.svg";
import Punto from "../../components/TurnoGlass/Punto";
import edit from "../../assets/edit.svg";
import deleteicon from "../../assets/deleteicon.svg";
import { Box, Modal, Popover } from "@mui/material";
import "./RecorridosScreen.css";
import ListItem from "@mui/material/ListItem";
import "./Modal.css";
import { motion } from "framer-motion";
import DialogAsignar from "./DialogAsignar";
import close from "../../assets/close.svg";
import DialogView from "./DialogView";
import RecorridoGlassSelected from "../../components/RecorridoGlass/RecorridoGlassSelect";
import {
  getBeepcons,
  getRecorridos,
  getTurnos,
  RefreshButton,
} from "../../database/getBeepcons";
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
  deleteDoc,
} from "firebase/firestore";
import BeepconsGlassItem from "../../components/BeepconsGlass/BeepconsGlassItem";
export default function RecorridosScreen() {
  const [beepcons, setBeepcons] = React.useState([]);
  const [turnos, setTurnos] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);
  const [openAsignar, setOpenAsignar] = React.useState(false);
  const [recorridos, setRecorridos] = React.useState([]);
  const [recorridoId, setRecorridoId] = React.useState("");
  const [reducedBeepcons, setReducedBeepcons] = React.useState([]);
  const [userInput, setUserInput] = React.useState({
    id: "",
    nombre: "",
    descripcion: "",
    puntos: [],
    turnos: [],
  });
  React.useEffect(() => {
    async function hola() {
      let beepcons = await getBeepcons();
      let recorridos = await getRecorridos();
      let turnos = await getTurnos();
      setBeepcons(beepcons);
      setRecorridos(recorridos);
      setTurnos(turnos);

      let r_beepcons = beepcons.map((beepcon) => {
        return {
          id: beepcon.id,
          selected: false,
        };
      });
      setReducedBeepcons(r_beepcons);
      // console.log(reducedBeepcons);
    }
    hola();
  }, []);
  const handleCheck = (beepcon) => {
    let newReducedBeepcons = reducedBeepcons.map((r_beepcon) => {
      if (r_beepcon.id === beepcon.id) {
        return {
          ...r_beepcon,
          selected: !r_beepcon.selected,
        };
      } else {
        return r_beepcon;
      }
    });
    setReducedBeepcons(newReducedBeepcons);
    console.log(newReducedBeepcons);
  };

  const sendRecorrido = async () => {
    if (
      userInput.nombre === "" ||
      userInput.descripcion === "" ||
      userInput.puntos.length > 2
    ) {
      alert("Complete todos los campos");
      return;
    }

    setOpen(false);
    try {
      const docRef = await addDoc(collection(db, "recorridos"), {
        nombre: userInput.nombre,
        descripcion: userInput.descripcion,
        puntos: reducedBeepcons.filter((beepcon) => beepcon.selected),
        turnos: [],
      });

      console.log("Document recorrido written with ID: ", docRef.id);
      setRecorridos(await getRecorridos());
      //Limpio los campos
      setUserInput({
        id: "",
        nombre: "",
        descripcion: "",
        puntos: [],
        turnos: [],
      });
    } catch (e) {
      console.log("ERROR ! =", e);
    }
  };

  const getterRecorridos = async () => {
    setRecorridos(await getRecorridos());
  };

  const openViewModal = (id) => {
    setRecorridoId(id);
    setOpenView(true);
  };

  const openDialog = (id) => {
    setRecorridoId(id);
    setOpenAsignar(true);
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
            <RefreshButton
              refresh={() => {
                getterRecorridos();
              }}
            />
            <div
              className="recorridos-screen__header__icon"
              onClick={async () => {
                setOpen(true), setBeepcons(await getBeepcons());
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
                  id: recorrido.id,
                  turnos: recorrido.turnos,
                  actualizar: getterRecorridos,
                  openAsignar: openDialog,
                  openView: openViewModal,
                }}
              />
            ))}
          </div>
        </motion.div>
        {/* MODAL AÑADIR */}
        <Modal open={open}>
          <div className="recorridos-screen__modal">
            <span
              className="recorridos-screen__modal__close"
              onClick={() => {
                setOpen(false);
              }}
            >
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
                      nombre: e.target.value,
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
                      descripcion: e.target.value,
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
                    {beepcons.map((beepcon) => {
                      return (
                        <div className="recorridos-modal__item">
                          <p>{beepcon.nombre}</p>
                          <input
                            type="checkbox"
                            onClick={() => handleCheck(beepcon)}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        {/* Dialog ASIGNAR */}
        <DialogAsignar
          setRecorridos={() => {
            getterRecorridos;
          }}
          open={openAsignar}
          onClose={() => setOpenAsignar(false)}
          id={recorridoId}
          getId={() => {
            return recorridoId;
          }}
        />
        {/* Dialog VIEW */}
        <DialogView
          open={openView}
          onClose={() => setOpenView(false)}
          id={recorridoId}
        />
        
      </div>
    </>
  );
}

/*
Lista de tareas
- Boton eliminar recorrido
- Boton editar recorrido
- Boton ver recorrido
- Asignar turno a recorrido
*/

function RecorridosItem(props) {
  const { nombre, descripcion, id, actualizar, openAsignar, turnos, openView } =
    props.package;
  const deleteRecorrido = async () => {
    console.log("Eliminar recorrido");
    await deleteDoc(doc(db, "recorridos", id));
    turnos.forEach(async (turno) => {
      await deleteDoc(doc(db, "turnos", turno));
    });
    actualizar();
  };
  const showPopper = () => {
    openView(id);
    console.log("Mostrar popper");
  };
  return (
    <div className="recorridos-screen__body__item" >
      <div className="recorridos-screen__body__row">
        <div className="recorridos-screen__body__row__icon">
          <Punto color="#9F51DD" />
        </div>
        <div className="recorridos-screen__body__row__text" onClick={showPopper}>{nombre}</div>
      </div>
      <div className="recorridos-screen__body__row2">
        <div
          className="recorridos-screen__body__row2__button"
          onClick={() => {
            openAsignar(id);
          }}
        >
          <p>Asignar Turno</p>
        </div>
        <div className="recorridos-screen__body__row2__button__group">
          <div className="recorridos-screen__body__row2__button__group__edit">
            <img src={edit} alt="" />
          </div>
          <div
            className="recorridos-screen__body__row2__button__group__delete"
            onClick={deleteRecorrido}
          >
            <img src={deleteicon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
