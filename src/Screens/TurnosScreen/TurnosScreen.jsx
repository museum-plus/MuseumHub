import React from "react";
import NavigationGlass from "../../components/NavigationGlass/NavigationGlass";
import "./TurnosScreen.css";
import "./TurnosModal.css";
import plus from "../../assets/plus.svg";
import Punto from "../../components/TurnoGlass/Punto";
import edit from "../../assets/edit.svg";
import clock from "../../assets/clock.svg";
import deleteicon from "../../assets/deleteicon.svg";
import { getRecorridos, getTurnos, deleteTurnos } from "../../database/getBeepcons";
import { motion } from "framer-motion";
import { Modal } from "@mui/material";
import { db } from "../../database/db";
import close from "../../assets/close.svg";
import { RefreshButton } from "../../database/getBeepcons";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
export default function TurnosScreen() {
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [recorridos, setRecorridos] = React.useState([]);
  const [turnos, setTurnos] = React.useState([]);
  const [data, setData] = React.useState({
    visitante: "",
    horario: "",
    fecha: "",
    recorrido_id: "",
  });

  React.useEffect(() => {
    const get = async () => {
      let cloned_recorridos = recorridos
      let cloned_turnos = turnos
      cloned_turnos = await getTurnos()
      cloned_recorridos = await getRecorridos()
      setRecorridos(cloned_recorridos)
      setTurnos(cloned_turnos);
    };
    get();
  }, []);

  const sendTurno = async () => {
    //Cierra el modal
    setOpen(false);

    //Intento de agregar a la base de datos
    try {
      //Añado el turno a la base y obtengo su referencia
      const docRef = await addDoc(collection(db, "turnos"), {
        visitante: data.visitante,
        horario: data.horario,
        fecha: data.fecha,
        recorrido_id: data.recorrido_id,
      });

      const recorridoRef =  doc(db, "recorridos", data.recorrido_id); //Referencia al recorrido del turno
      const recorridoSnap = await getDoc(recorridoRef); //Obtengo el recorrido
      const recorridoData = recorridoSnap.data(); //Obtengo los datos del recorrido
      const recorridoTurnos = recorridoData.turnos; //Obtengo el array de turnos del recorrido
      const turnoId = docRef.id; //Id del turno agregado

      //Añado el id del turno al array de turnos del recorrido con updateDoc
      const updateRef = await updateDoc(recorridoRef, {
        turnos: [...recorridoTurnos, turnoId], 
      });

      setTurnos(await getTurnos()); //Actualizo la lista de turnos

      //Reseteo los datos del formulario
      setData({
        visitante: "",
        horario: "",
        fecha: "",
        recorrido_id: "",
      });
    } catch (e) {
      console.log("ERROR ! =", e);
    }

  }
  const setearTurnos = async () => {
    setTurnos(await getTurnos())
  }
  const openModal = () => {
    if (recorridos.length > 0) {
      setOpen(true);
    } else {
      let answer = confirm("No hay recorridos disponibles, cree uno primero");
      if (answer) {
        window.location.href = "/recorridos";
      }
    } 
  }

  const closeModal = () => {
    setOpen(false);
  }

  const openModalEdit = () => {
    setOpenEdit(true);
  }
  const closeModalEdit = () => {
    setOpenEdit(false);
  }
  //seters Data
  const setDataVisitante = (visitante) => {
    console.log(visitante, "SET DATA VISITANTE")
    setData({ ...data, visitante: visitante })
  }
  const setDataHorario = (horario) => {
    setData({ ...data, horario: e.target.value })
  }
  const setDataFecha = (fecha) => {
    setData({ ...data, fecha: e.target.value })
  }
  const setDataRecorrido = (recorrido) => {
    setData({ ...data, recorrido_id: e.target.value })
  }
  const setersData = () => {
    setDataVisitante();
    setDataHorario();
    setDataFecha();
    setDataRecorrido();
  }
  const handleSelectChange = (e) => { 
    console.log(e.target.value)
    let value = e.target.value;
    setData({ ...data, recorrido_id: value })
  }
  return (
    <div className="screen-blur turnos-screen-container">
      <NavigationGlass />
      <motion.div
        className="turnos-screen"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="turnos-screen__header">
          <div className="turnos-screen__header__text">Turnos</div>
          <RefreshButton refresh={() => {setearTurnos()}}/>
          <div className="turnos-screen__header__icon" onClick={openModal}>
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="turnos-screen__body">
          {turnos.map((turno) => (

            <TurnosItem
              openModalEdit={() => { openModalEdit() }}
              setearTurnos={() => { setearTurnos() }}
              key={turno.id}
              id={turno.id}
              visitante={turno.visitante}
              horario={turno.horario}
              fecha={turno.fecha}
              recorrido_id={turno.recorrido_id}

            />
          ))}
        </div>
      </motion.div>
      <Modal open={open}>
        <div className="turnos_modal">
          <span className="recorridos-screen__modal__close" onClick={() => { setOpen(false) }}>
            <img src={close} alt="close" />
          </span>
          <div>
            <p> Turnos </p>
            <input type="text" onChange={(e) => { setData({ ...data, visitante: e.target.value }) }} value={data.visitante} />
            <input type="text" onChange={(e) => { setData({ ...data, horario: e.target.value }) }} value={data.horario} />
            <input type="text" onChange={(e) => { setData({ ...data, fecha: e.target.value }) }} value={data.fecha} />
            <button onClick={sendTurno} >Guardar</button>
          </div>
          <div>
            <select onClick={handleSelectChange} >
              {recorridos.map((recorrido) => (
                <option key={recorrido.id} value={recorrido.id}>{recorrido.nombre}</option>
              ))}
            </select>
          </div>
        </div>
      </Modal>
      <ModalEdit open={openEdit}
        closeModalEdit={() => { closeModalEdit() }}
      />
    </div>
  );
}

function TurnosItem(props) {
  const [recorrido, setRecorrido] = React.useState({});

  React.useEffect(() => {
    const get = async () => {
      const docRef = doc(db, "recorridos", props.recorrido_id);
      const docSnap = await getDoc(docRef);
      setRecorrido(docSnap.data());
    };
    get();
  }, [props.recorrido_id]);
  const deleteTurno = async () => {
    await deleteTurnos(props.id)
    props.setearTurnos();
  }

  return (
    <div key={props.id} className="turnos-screen__body__item">
      <div className="turnos-screen__body__row">
        <div className="turnos-screen__body__row__icon">
          <Punto color="#9F51DD" />
        </div>
        <div className="turnos-screen__body__row__text">{props.visitante}</div>
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
        <div className="turnos-screen__body__row2__text">{recorrido.nombre}</div>
        <div className="turnos-screen__body__row2__button__group">
          <div className="turnos-screen__body__row2__button__group__edit">
            <img src={edit} alt="..." onClick={() => { props.openModalEdit() }} />
          </div>
          <div className="turnos-screen__body__row2__button__group__delete">
            <img src={deleteicon} alt="" onClick={() => { deleteTurno() }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalEdit(props) {
  return (
    <Modal open={props.open}>
      <div className="turnos_modal">
        <span className="recorridos-screen__modal__close" onClick={() => { setOpen(false) }}>
          <img src={close} alt="close" />
        </span>
      </div>
    </Modal>
  );
}
//Hacer componente modal el cual sirva tanto para el edit como para el create