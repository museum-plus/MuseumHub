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
  getSingleBeepcon
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
  updateDoc,
} from "firebase/firestore";
import BeepconsGlassItem from "../../components/BeepconsGlass/BeepconsGlassItem";
export default function RecorridosScreen() {
  const [beepcons, setBeepcons] = React.useState([]);
  const [turnos, setTurnos] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);
  const [openAsignar, setOpenAsignar] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
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
          nombre: beepcon.nombre,
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
    console.log(reducedBeepcons.filter((beepcon) => beepcon.selected));
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
        puntos: reducedBeepcons,
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

  const openEditModal = (id) => {
    setRecorridoId(id);
    setOpenEdit(true);
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
                  openEdit: openEditModal,
                  getTurnos: getTurnos,
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
                        <div key={beepcon.id} className="recorridos-modal__item">
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
        <ModalEditRecorrido
          open={openEdit}
          actualizar={() => {
            getterRecorridos();
          }}
          onClose={() => setOpenEdit(false)}
          id={recorridoId}
          getId={() => {
            return recorridoId;
          }}
        />
        
      </div>
    </>
  );
}

function ModalEditRecorrido(props) {
  const [beepcons, setBeepcons] = React.useState([]);
  const [data, setData] = React.useState({
    nombre: "",
    descripcion: "",
    puntos: [],
    turnos: [],
    id: props.id,
  });

  const sendTurnoEdit = async () => {
    setData({...data, id:props.getId()})
    console.log("Entro al send",data)
    props.closeModalEdit()
    await updateDoc(doc(db,"recorridos", props.id),{
      nombre: data.nombre,
      descripcion: data.descripcion,
      data: data.puntos,
      turnos: data.turnos,
    })
    console.log(data.id,"hey youS")
    props.actualizar();
  }
  React.useEffect(() => {
    const get = async () => {
      // const hola = await getTurnoId(props.turnoId);
      // setTurno(hola);
      const recorridoRef = doc(db, "recorridos", props.id);
      const recorridoSnapshot = await getDoc(recorridoRef)
      const recorridoInfo = recorridoSnapshot.data()
      const r_beepcons = recorridoInfo.puntos
      setData(recorridoInfo);
      console.log("R_BEPCONS" + r_beepcons);
      setBeepcons(r_beepcons);
      // console.log(data,"daasdasdasd")
    };
    get();
  }, [props.id]);

  const handleCheck = (beepcon) => {
    const beepconsCopy = [...beepcons];
    const beepconIndex = beepconsCopy.findIndex(
      (beepconItem) => beepconItem.id === beepcon.id
    );
    beepconsCopy[beepconIndex].selected = !beepconsCopy[beepconIndex].selected;
    setBeepcons(beepconsCopy);
    // const beepconsChecked = beepconsCopy.filter(
    //   (beepconItem) => beepconItem.selected
    // );
    setData({
      ...data,
      puntos: beepcons,
    });
    console.log(data);
  };

  const guardarEdit = async () => {
    if (data.nombre === "" || data.descripcion === "" || data.puntos === []) {
      alert("Debe completar todos los campos");
      return;
    }
    await updateDoc(doc(db,"recorridos", props.id),{
      nombre: data.nombre,
      descripcion: data.descripcion,
      puntos: data.puntos,
      turnos: data.turnos,
    })
    props.actualizar();
    props.onClose()
  };

  return (
    <Modal open={props.open} >
          <div className="recorridos-screen__modal">
            <span
              className="recorridos-screen__modal__close"
              onClick={() => {
                props.onClose()
              }}
            >
              <img src={close} alt="close" />
            </span>
            <div className="recorridos-screen__modal__header">Editar Recorrido:</div>
            <div className="recorridos-screen__modal__body">
              <div className="recorridos-screen__modal__body__row1">
                <div className="recorridos-screen__modal__body__row1__input__label">
                  Nombre:
                </div>
                <input
                  value={data.nombre}
                  type="text"
                  className="recorridos-screen__modal__body__row1__input"
                  onChange={(e) => {
                    setData({
                      ...data,
                      nombre: e.target.value,
                    });
                  }}
                />
                <div className="recorridos-screen__modal__body__row1__input__label">
                  Descripcion:
                </div>
                <input
                  value={data.descripcion}
                  type="text"
                  className="recorridos-screen__modal__body__row1__input"
                  onChange={(e) => {
                    setData({
                      ...data,
                      descripcion: e.target.value,
                    });
                  }}
                />
                <button
                  className="recorridos-screen__modal__body__row1__button"
                  onClick={() => {
                    guardarEdit();
                  }}
                  
                >
                  Guardar cambios
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
                        <div key={beepcon.id} className="recorridos-modal__item">
                          <p>{beepcon.nombre}</p>
                          <input
                            defaultChecked={beepcon.selected}
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
  
  );
}


function RecorridosItem(props) {
  const [turno, setTurno] = React.useState(props.package.turnos);
  const { nombre, descripcion, id, actualizar, openAsignar, turnos, openView, openEdit } =
    props.package;

  const deleteRecorrido = async () => {
    const ELIMINAR_TURNOS = async ()=>{
      const manzana = await getDoc(doc(db, "recorridos", id))
      const mandarina = manzana.data()
      setTurno(mandarina.turnos)
      console.log("ESTE ES EL TURNO", turno);
      console.log("Usted ha presionado eliminar recorrido", turno);
      turno.forEach(async (turno) => {
        await deleteDoc(doc(db, "turnos", turno.turno_id));
        console.log("eliminado con id: " + turno.turno.id);
      });
    }

    await ELIMINAR_TURNOS()
    await deleteDoc(doc(db, "recorridos", id));
    actualizar();
    
    
    // console.log(props.package);
  };
  const showPopper = () => {
    openView(id);
    console.log("Mostrar popper");
  };
  const showEdit = () => {
    openEdit(id);
  }
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
          <div className="recorridos-screen__body__row2__button__group__edit" onClick={showEdit}>
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
