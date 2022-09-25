import React, { useContext } from "react";
import { Modal } from "@mui/material";
import { db } from "../../database/db";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import close from "../../assets/close.svg";
import './Modal.css'
import ThemeContext from "../../context/theme-context";
import CloseIcon from "../../assets/CloseIcon";
import { motion } from "framer-motion";
import { LogsContext } from "../../context/logsContext";
export default function DialogAsignar(props) {
  const {handleAlert} = useContext(LogsContext);
  const { theme, handleTheme } = useContext(ThemeContext);
    const [data, setData] = React.useState({
        visitante: "",
        horario: "",
        fecha: "",
        recorrido_id: props.id,
    });
    const sendTurno = async () => {
        props.onClose();
        setData({...data, recorrido_id: props.getId()})
        try {
            console.log(data);
            //Add doc no es lo mismo que setdoc
            const docRef = await addDoc(collection(db, "turnos"), {
                visitante: data.visitante,
                horario: data.horario,
                fecha: data.fecha,
                recorrido_id: props.getId(),
            });

            console.log("Document written with ID: ", docRef.id);

            const recorridoRef = doc(db, "recorridos", props.getId()); //Referencia al recorrido del turno
            const recorridoSnap = await getDoc(recorridoRef); //Obtengo el recorrido
            const recorridoData = recorridoSnap.data(); //Obtengo los datos del recorrido
            const recorridoTurnos = recorridoData.turnos; //Obtengo el array de turnos del recorrido
            recorridoTurnos.push({turno_id: docRef.id, turno_visitante: data.visitante}); //Agrego el id del turno al array de turnos del recorrido
            // recorridoTurnos.push(docRef); //Agrego el id del turno al array de turnos del recorrido
            await updateDoc(recorridoRef, { turnos: recorridoTurnos }); //Actualizo el array de turnos del recorrido

            //Añado el id del turno al array de turnos del recorrido con updateDoc
            // const updateRef = await updateDoc(doc(db, "recorridos", ), {
            //   turnos: [...recorridoTurnos, turnoId],
            // });

            props.setRecorridos()
            setData({
                visitante: "",
                horario: "",
                fecha: "",
            });
            handleAlert('NEW_TR')
        } catch (e) {
            console.log("ERROR ! =", e);
        }
    };
  return (
    <Modal open={props.open}>
      <div className="recorridos-screen__modal__asignar" style={theme.glass}>
        <p>Asignar un nuevo turno</p>
        <span onClick={props.onClose}>
          <CloseIcon/>
        </span>
        <div>
          <label>Visitante </label>
          <input
          style={theme.input}
          placeholder="Ingrese nombre"
            type="text"
            onChange={(e) => {
              setData({ ...data, visitante: e.target.value });
            }}
            value={data.visitante}
          />
          <label >Horario: </label>
          <input
          style={theme.input}
          placeholder="Ingrese Horario (HH:MM)"
            type="text"
            onChange={(e) => {
              setData({ ...data, horario: e.target.value });
            }}
            value={data.horario}
          />
          <label>Fecha: </label>

          <input
          style={theme.input}
          placeholder="Ingrese Fecha (DD/MM/AAAA)"
            type="text"
            onChange={(e) => {
              setData({ ...data, fecha: e.target.value });
            }}
            value={data.fecha}
          />
          <motion.button whileHover={{ scale: 1.06 }} onClick={sendTurno} style={theme.btn}>Guardar</motion.button>
        </div>
      </div>
    </Modal>
  );
}
