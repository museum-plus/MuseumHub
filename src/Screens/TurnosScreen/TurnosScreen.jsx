import React from "react";
import NavigationGlass from "../../components/NavigationGlass/NavigationGlass";
import "./TurnosScreen.css";
import "./TurnosModal.css";
import plus from "../../assets/plus.svg";
import Punto from "../../components/TurnoGlass/Punto";
import edit from "../../assets/edit.svg";
import clock from "../../assets/clock.svg";
import deleteicon from "../../assets/deleteicon.svg";
import { getRecorridos, getTurnos } from "../../database/getBeepcons";
import { motion } from "framer-motion";
import { Modal } from "@mui/material";
import { db } from "../../database/db";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
export default function TurnosScreen() {
  const [open, setOpen] = React.useState(false);
  const [recorridos, setRecorridos] = React.useState([]);
  const [turnos, setTurnos] = React.useState([]);
  const [data, setData] = React.useState({	
    visitante: "",
    horario: "",
    fecha: "",
    recorrido_id: "",
    });
  const openModal = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    const get = async () => {
      setRecorridos(await getRecorridos());
      setTurnos(await getTurnos());
    };
    get();
  }, []);

  const sendTurno = async () =>{
    setOpen(false);
    try {
      const docRef = await addDoc(collection(db, "turnos"), {
        visitante: data.visitante,
        horario: data.horario,
        fecha: data.fecha,
        recorrido_id: data.recorrido_id,
      });
      setTurnos(await getTurnos());
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
          <div className="turnos-screen__header__icon" onClick={openModal}>
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="turnos-screen__body">
          {turnos.map((turno) => (

            <TurnosItem
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
          <div>
            <p> Turnos </p>
            <input type="text" onChange={(e)=>{setData({...data, visitante: e.target.value })}} value={data.visitante}/>
            <input type="text" onChange={(e)=>{setData({...data, horario: e.target.value })}} value={data.horario}/>
            <input type="text" onChange={(e)=>{setData({...data, fecha: e.target.value })}} value={data.fecha}/>          
            <button onClick={sendTurno} >Guardar</button>
          </div>
          <div>
            <select onChange={(e)=>{setData({...data, recorrido_id: e.target.value})}}>
              {recorridos.map((recorrido) => (
                <option key={recorrido.id} value={recorrido.id}>{recorrido.nombre}</option>
              ))}
            </select>
          </div>
        </div>
      </Modal>
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
