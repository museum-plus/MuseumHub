import React, { useContext, useState } from 'react';
import Punto from '../TurnoGlass/Punto';
import close from "../../assets/close.svg";
import { motion } from "framer-motion"
import './BeepconsGlassItem.css'
import BeepconsItemInfo from './BeepconsItemInfo';
import { deleteBeepcons } from '../../database/getBeepcons';
import { db } from '../../database/db';
import { updateDoc, doc, query, where, collection } from 'firebase/firestore';
import CloseIcon from '../../assets/CloseIcon';
import ThemeContext from '../../context/theme-context';
import PuntoColor from '../../assets/PuntoColor';
import { LogsContext } from '../../context/logsContext';
export default function BeepconsGlassItem(props) {
  const {handleAlert} = useContext(LogsContext)
  const { nombre, descripcion, posicion, id } = props.package;
  const [showInput, setShowInput] = useState(false);
  const [showInputTitle, setShowInputTitle] = useState(false);
  const [userInput, setUserInput] = useState({
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    posicion: {
      x: posicion.x,
      y:  posicion.y,
    },
  });
  const sendEditedValues = async () => {
    try {
      // console.log(doc(db, "beepcons", id));
      await updateDoc(doc(db, "beepcons", id), {
        nombre: userInput.nombre,
        descripcion: userInput.descripcion,
      });
      console.log("Document successfully updated!");
      handleAlert('UPDATE_BP');
    } catch (e) {
      console.log("EROR", e);
    }
    // console.log(id);
  };

  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div className='beepcons-glass__body__content__item'>
      <motion.div
        className='beepcons-glass__body__content__item__header'
        whileHover={{ scale: 1.05 }}
        onHoverStart={e => { }}
        onHoverEnd={e => { }}
      >
        <div className='beepcons-glass__body__content__item__header__icon'>
          <PuntoColor color={theme.punto.color}></PuntoColor>
        </div>
        {/* <div className='beepcons-glass__body__content__item__header__titulo'> */}
        <BeepconsItemInfo
          value={userInput.nombre}
          title={true}
          sendEditedValues={()=>{sendEditedValues()}}
          handleChange={(e) => setUserInput({ ...userInput, nombre: e.target.value })}
          handleDoubleClick={() => {setShowInputTitle(true); console.log("doubleclicked")}}
          handleBlur={() => setShowInputTitle(false)}
          showInput={showInputTitle} />
        {/* </div> */}
        <div className='beepcons-glass__delete' onClick={() => {
          deleteBeepcons(userInput.id),
          props.package.actualizar()
          handleAlert('DELETE_BP');
        }}>
          <CloseIcon/>
        </div>
        {/* </div> */}
      </motion.div>
      <motion.div
        className='beepcons-glass__body__content__item__text'
        style={theme.border.bottom.alpha}
        whileHover={{ scale: 1.05 }}
        onHoverStart={e => { }}
        onHoverEnd={e => { }}
      >
        <BeepconsItemInfo
          value={userInput.descripcion}
          sendEditedValues={()=>{sendEditedValues()}}
          handleChange={(e) => setUserInput({...userInput, descripcion: e.target.value})}
          handleDoubleClick={() => setShowInput(true)}
          handleBlur={() => setShowInput(false)}
          showInput={showInput} />
      </motion.div>
    </div>
  )
}
