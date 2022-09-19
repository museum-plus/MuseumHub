import React from "react";
import { db } from "../../database/db";
import { getSingleRecorrido } from "../../database/getBeepcons";
import { Modal } from "@mui/material";
export default function DialogView(props) {
    const [recorrido, setRecorrido] = React.useState({
        id: "",
        nombre: "",
        descripcion: "",
        puntos: [],
        turnos: [],
    });
    React.useEffect(() => {
        getSingleRecorrido(props.id).then((data) => {
            setRecorrido(data);
        });

    }, [props.id]);

  return (
    <Modal open={props.open}>
      <div
        onBlur={() => {
            props.onClose();
        }}
        className="recorridos-description__modal"
      >
        <p>{recorrido.nombre}</p>
        <p>{recorrido.descripcion}</p>
      </div>
    </Modal>
  );
}
