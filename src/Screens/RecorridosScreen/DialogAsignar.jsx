import React from "react";
import { Modal } from "@mui/material";
import { db } from "../../database/db";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import close from "../../assets/close.svg";
export default function DialogAsignar(props) {
    const [data, setData] = React.useState({
        visitante: "",
        horario: "",
        fecha: "",
        recorrido_id: props.id,
    });
    const sendTurno = async () => {
        props.onClose();
        try {
            console.log(data);
            const docRef = await addDoc(collection(db, "turnos"), {
                visitante: data.visitante,
                horario: data.horario,
                fecha: data.fecha,
                recorrido_id: props.id,
            });
            props.setRecorridos()
            setData({
                visitante: "",
                horario: "",
                fecha: "",
            });
        } catch (e) {
            console.log("ERROR ! =", e);
        }
    };
  return (
    <Modal open={props.open}>
      <div className="recorridos-screen__modal__asignar">
        <span onClick={props.onClose}>
          <img src={close} alt="close" />
        </span>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, visitante: e.target.value });
            }}
            value={data.visitante}
          />
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, horario: e.target.value });
            }}
            value={data.horario}
          />
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, fecha: e.target.value });
            }}
            value={data.fecha}
          />
          <button onClick={sendTurno} >Guardar</button>
        </div>
        <button>Asignar turno</button>
      </div>
    </Modal>
  );
}
