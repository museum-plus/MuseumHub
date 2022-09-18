import React from "react";
import "./TurnoGlass.css";
import calendar from "../../assets/calendar.svg";
import punto from "../../assets/punto.svg";
import clock from "../../assets/clock.svg";
import { motion } from "framer-motion"
import Punto from "./Punto";
import { Link } from "react-router-dom";
import { getTurnos } from '../../database/getBeepcons';
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../database/db";
function TurnosInfo(props) {
  const [recorrido, setRecorrido] = React.useState({});
  React.useEffect(() => {
    const get = async () => {
      const docRef = doc(db, "recorridos", props.turno.recorrido_id);
      const docSnap = await getDoc(docRef);
      setRecorrido(docSnap.data());
    };
    get();
  }, [props.turno.recorrido_id]);
  return (
    <Link to="/Turnos">
    <motion.div className="turno-glass__body__container" whileHover={{ translateX: 5 }}>
      <div className="turno-glass__body__info">
        <Punto color={props.color}></Punto>
        <div className="turno-glass__body__nombre">{props.turno.visitante}</div>
        <div className="hora__container">
          <div className="turno-glass__body__text__hora">
            {props.turno.horario}
            <div className="turno-glass__body_text_clock" >
            <img src={clock} alt="icon"/>
            </div>
          </div>
          <div className="turno-glas__body__text__fecha">
            {props.turno.fecha}
          </div>
        </div>
      </div>
      <div className="turno-glass__body__text">{recorrido.nombre}</div>
    </motion.div>
    </Link>
  );
}
export default function TurnoGlass() {
  const [turnos, setTurnos] = React.useState([]);
  console.log(turnos)
  React.useEffect(() => {
    async function hola() {
      setTurnos(await getTurnos());
    }
    hola();
  }, []);
  return (
    <motion.div className="turno-glass__container"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div className="turno-glass__header">
        <motion.div className="turno-glass__header__text" whileTap={{ scale: 0.95 }}>
          Turnos Pendientes
          <div className="icon__calendar">
            <img src={calendar} alt="icon" />
          </div>
        </motion.div>
      </div>
      <div className="turno-glass__body">
        <div className="turno-glass__body__content">
          {turnos.map((turno) => (
            <TurnosInfo key={turno.id} color="#E1B74A" turno={turno}></TurnosInfo>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
