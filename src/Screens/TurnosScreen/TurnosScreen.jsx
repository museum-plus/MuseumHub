import React, { useContext } from "react";
import NavigationGlass from "../../components/NavigationGlass/NavigationGlass";
import "./TurnosScreen.css";
import "./TurnosModal.css";
import PlusIcon from "../../assets/PlusIcon.jsx";
import deleteicon from "../../assets/deleteicon.svg";
import {
  getRecorridos,
  getTurnos,
  deleteTurnos,
} from "../../database/getBeepcons";
import { motion } from "framer-motion";
import { Modal } from "@mui/material";
import { db } from "../../database/db";
import { RefreshButton, getTurnoId } from "../../database/getBeepcons";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import ThemeContext from "../../context/theme-context";
import ClockIcon from "../../assets/ClockIcon";
import EditIcon from "../../assets/EditIcon";
import CloseIcon from "../../assets/CloseIcon";
import PuntoColor from "../../assets/PuntoColor";
export default function TurnosScreen() {
  const [open, setOpen] = React.useState(false);
  const [turnoId, setTurnoId] = React.useState("");
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
      let cloned_recorridos = recorridos;
      let cloned_turnos = turnos;
      cloned_turnos = await getTurnos();
      cloned_recorridos = await getRecorridos();
      setRecorridos(cloned_recorridos);
      setTurnos(cloned_turnos);
    };
    get();
  }, []);

  const sendTurno = async () => {
    //Cierra el modal
    console.log("Entro al send");
    // setOpen(false);

    //Intento de agregar a la base de datos
    try {
      //Añado el turno a la base y obtengo su referencia
      const docRef = await addDoc(collection(db, "turnos"), {
        visitante: data.visitante,
        horario: data.horario,
        fecha: data.fecha,
        recorrido_id: data.recorrido_id,
      });

      const recorridoRef = doc(db, "recorridos", data.recorrido_id); //Referencia al recorrido del turno
      const recorridoSnap = await getDoc(recorridoRef); //Obtengo el recorrido
      const recorridoData = recorridoSnap.data(); //Obtengo los datos del recorrido
      const recorridoTurnos = recorridoData.turnos; //Obtengo el array de turnos del recorrido
      const turnoId = docRef.id; //Id del turno agregado
      recorridoTurnos.push({
        turno_id: docRef.id,
        turno_visitante: data.visitante,
      }); //Agrego el id del turno al array de turnos del recorrido
      // recorridoTurnos.push(docRef); //Agrego el id del turno al array de turnos del recorrido
      await updateDoc(recorridoRef, { turnos: recorridoTurnos });
      //Añado el id del turno al array de turnos del recorrido con updateDoc
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
  };

  const setearTurnos = async () => {
    setTurnos(await getTurnos());
  };
  const openModal = () => {
    if (recorridos.length > 0) {
      setOpen(true);
    } else {
      let answer = confirm("No hay recorridos disponibles, cree uno primero");
      if (answer) {
        window.location.href = "/recorridos";
      }
    }
  };

  const closeModal = () => {
    setOpen(false);
  };
  const openModalEdit = (turno) => {
    // console.log("open", turno)
    setTurnoId(turno);
    setOpenEdit(true);
  };
  const closeModalEdit = () => {
    setOpenEdit(false);
  };
  //seters Data

  const handleSelectChange = (e) => {
    let value = e.target.value;
    setData({ ...data, recorrido_id: value });
  };
  const { theme } = useContext(ThemeContext);
  return (
    <div className="screen-blur turnos-screen-container" style={theme.fondo}>
      <NavigationGlass />
      <motion.div
        style={theme.glass}
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
          <RefreshButton
            refresh={() => {
              setearTurnos();
            }}
          />
          <div
            className="turnos-screen__header__icon"
            onClick={() => {
              openModal();
            }}
          >
            <PlusIcon/>
          </div>
        </div>
        <div className="turnos-screen__body">
          {turnos.map((turno) => (
            <TurnosItem
              openModalEdit={(turno) => {
                openModalEdit(turno);
              }}
              setearTurnos={() => {
                setearTurnos();
              }}
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
        <div className="turnos-modal" style={theme.glass}>
          <span
            className="recorridos-screen__modal__close"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon/>
          </span>
          <div className="turnos-modal__col">
            <p> Turnos </p>
            <div className="turnos-modal__col__text">
              <div className="turnos-modal__col__text__row" style={theme.border.bottom.solid}>
                <p> Visitante </p>
                <input
                  type="text"
                  placeholder="Ingrese nombre visitante"
                  className="turnos-modal__col__input"
                  style={theme.fondo}
                  onChange={(e) => {
                    setData({ ...data, visitante: e.target.value });
                  }}
                  value={data.visitante}
                />
              </div>
              <div className="turnos-modal__col__text__row" style={theme.border.bottom.solid}>
                <p> Horario </p>
                <input
                  type="text"
                  style={theme.fondo}
                  placeholder="Ingrese Horario 00:00"
                  className="turnos-modal__col__input"
                  onChange={(e) => {
                    setData({ ...data, horario: e.target.value });
                  }}
                  value={data.horario}
                />
              </div>
              <div className="turnos-modal__col__text__row" style={theme.border.bottom.solid}>
                <p> Fecha </p>
                <input
                  type="text"
                  style={theme.fondo}
                  placeholder="Ingrese Fecha dd/mm/aaaa"
                  className="turnos-modal__col__input"
                  onChange={(e) => {
                    setData({ ...data, fecha: e.target.value });
                  }}
                  value={data.fecha}
                />
              </div>
              <div className="turnos-modal__col__text__row" style={theme.border.bottom.solid}>
                <p> Seleccionar Recorrido </p>
                <select
                style={theme.fondo}
                  className="turnos-modal__col__text__row__select"
                  onClick={handleSelectChange}
                >
                  {recorridos.map((recorrido) => (
                    <option key={recorrido.id} value={recorrido.id}>
                      {recorrido.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <motion.button 
            whileHover={{ scale: 1.06 }}
            className="turnos-modal__col__btn" onClick={sendTurno} style={theme.btn}>
              Guardar
            </motion.button>
          </div>
        </div>
      </Modal>
      <ModalEdit
        actualizar={async () => setTurnos(await getTurnos())}
        getId={() => {
          return turnoId;
        }}
        open={openEdit}
        turnoId={turnoId}
        data={data}
        setDataVisitante={(visitante) => {
          setDataVisitante(visitante);
        }}
        closeModalEdit={() => {
          closeModalEdit();
        }}
      />
    </div>
  );
}

function TurnosItem(props) {
  const { theme, handleTheme } = useContext(ThemeContext);
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
    console.log(recorrido);
    const DELETE_TURNO = async ()=>{
      await updateDoc(doc(db, "recorridos", props.recorrido_id), {
        turnos: recorrido.turnos.filter((turno) => turno !== props.id),
      });
    }
    try {
      await DELETE_TURNO();
      await deleteTurnos(props.id);
    } catch (error) {
      console.log("No fue posible eliminar el turno del recorrido", error);
    }

    props.setearTurnos();
  };

  return (
    <div key={props.id} className="turnos-screen__body__item" style={theme.border.border_alpha}>
      <div className="turnos-screen__body__row">
        <div className="turnos-screen__body__row__icon">
          <PuntoColor color="#9F51DD" />
        </div>
        <div className="turnos-screen__body__row__text">{props.visitante}</div>
        <div className="turnos-screen__body__row__group">
          <div className="turnos-screen__body__row__group__text">
            {props.horario == undefined ? "hola" : props.horario}
          </div>
          <div className="turnos-screen__body__row__group__icon">
            <ClockIcon/>
          </div>
        </div>
      </div>
      <div className="turnos-screen__body__row2">
        <div className="turnos-screen__body__row2__text">
          {recorrido === undefined ? "No hay recorrido" : recorrido.nombre}
        </div>
        <div className="turnos-screen__body__row2__button__group">
          <div className="turnos-screen__body__row2__button__group__edit" onClick={() => {
                props.openModalEdit(props.id);
              }}>
            <EditIcon/>
          </div>
          <div className="turnos-screen__body__row2__button__group__delete">
            <img
              src={deleteicon}
              alt=""
              onClick={() => {
                deleteTurno();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalEdit(props) {
  const [recorridos, setRecorridos] = React.useState([]);
  const [data, setData] = React.useState({
    visitante: "",
    horario: "",
    fecha: "",
    recorrido_id: "",
    id: props.turnoId,
  });
  const handleSelectChange = (e) => {
    let value = e.target.value;
    setData({ ...data, recorrido_id: value });
  };
  const sendTurnoEdit = async () => {

    const sendTurnoBD = async () => {
      // console.log(props.turnoId);
       await updateDoc(doc(db, "turnos", props.turnoId), {
        visitante: data.visitante,
        horario: data.horario,
        fecha: data.fecha,
        recorrido_id: data.recorrido_id,
      });
      setData({ ...data, id: props.getId() });
    };


    //Cierra el modal
    props.closeModalEdit();
    await sendTurnoBD()

    let recorrido = await getDoc(doc(db, "recorridos", data.recorrido_id));
    // console.log(recorrido.data())
    let array = recorrido.data().turnos;
    // console.log(array);
    array.push({
      turno_id: data.id,
      turno_visitante: data.visitante,
    }); //Agrego el id del turno al array de turnos del recorrido

    // recorridoTurnos.push(docRef); //Agrego el id del turno al array de turnos del recorrido
    await updateDoc(doc(db, "recorridos", data.recorrido_id), { turnos: array });

    // console.log(data.id, "hey youS");
    props.actualizar();

  };
  React.useEffect(() => {
    const get = async () => {
      // const hola = await getTurnoId(props.turnoId);
      // setTurno(hola);
      const a = doc(db, "turnos", props.turnoId);
      const b = await getDoc(a);
      const info = b.data();
      setData(info);
      const recos = await getRecorridos();
      setRecorridos(recos);
      // console.log(data,"daasdasdasd")
    };
    get();
  }, [props.turnoId]);
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <Modal open={props.open}>
      <div className="turnos-modal" style={theme.glass}>
        <span
          className="recorridos-screen__modal__close"
          onClick={() => {
            props.closeModalEdit();
          }}
        >
          <CloseIcon/>
        </span>
        <div className="turnos-modal__col">
          <p> Turnos </p>
          <div className="turnos-modal__col__text">
            <div className="turnos-modal__col__text__row" style={theme.border.bottom.solid}>
              <p> Visitante </p>
              <input
                type="text"
                placeholder="Ingrese nombre visitante"
                style={theme.fondo}
                className="turnos-modal__col__input"
                onChange={(e) => {
                  setData({ ...data, visitante: e.target.value });
                }}
                value={data.visitante}
              />
            </div>
            <div className="turnos-modal__col__text__row" style={theme.border.bottom.solid}>
              <p> Horario </p>
              <input
                type="text"
                placeholder="Ingrese Horario 00:00 - 23:59"
                style={theme.fondo}
                className="turnos-modal__col__input"
                onChange={(e) => {
                  setData({ ...data, horario: e.target.value });
                }}
                value={data.horario}
              />
            </div>
            <div className="turnos-modal__col__text__row" style={theme.border.bottom.solid}>
              <p> Fecha </p>
              <input
                type="text"
                placeholder="Ingrese Fecha dd/mm/aaaa"
                style={theme.fondo}
                className="turnos-modal__col__input"
                onChange={(e) => {
                  setData({ ...data, fecha: e.target.value });
                }}
                value={data.fecha}
              />
            </div>
            <div className="turnos-modal__col__text__row" style={theme.border.bottom.solid}> 
              <p> Seleccionar Recorrido </p>
              <select
                className="turnos-modal__col__text__row__select"
                onClick={handleSelectChange}
                style={theme.fondo}
              >
                {recorridos.map((recorrido) => (
                  <option key={recorrido.id} value={recorrido.id}>
                    {recorrido.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.06 }}
            className="turnos-modal__col__btn"
            style={theme.btn}
            onClick={() => {
              sendTurnoEdit();
            }}
          >
            Editar
          </motion.button>
        </div>
      </div>
    </Modal>
  );
}
//Hacer componente modal el cual sirva tanto para el edit como para el create
