import React, { useState } from 'react'
import Punto from '../TurnoGlass/Punto'
import { motion } from "framer-motion"
import './BeepconsGlassItem.css'
import BeepconsItemInfo from './BeepconsItemInfo';
import { db } from '../../database/db';
import { updateDoc, doc, query, where, collection } from 'firebase/firestore';
export default function BeepconsGlassItem(props) {
  const { nombre, descripcion, posicion, id } = props.package;
  const [punto, setPunto] = useState(props.nombre);
  const [desc, setDesc] = useState(props.descripcion);
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
      console.log(doc(db, "beepcons", id));
      await updateDoc(doc(db, "beepcons", id), {
        nombre: userInput.nombre,
        descripcion: userInput.descripcion,
      });
      console.log("Document successfully updated!");
    } catch (e) {
      console.log("EROR", e);
    }
    // console.log(id);
  };


  return (
    <div className='beepcons-glass__body__content__item'>
      <motion.div
        className='beepcons-glass__body__content__item__header'
        whileHover={{ scale: 1.05 }}
        onHoverStart={e => { }}
        onHoverEnd={e => { }}
      >
        {/* <div className='beepcons-glass__body__content__item__header'> */}
        <div className='beepcons-glass__body__content__item__header_icon'>
          <Punto color={props.color}></Punto>
        </div>
        <div className='beepcons-glass__body__content__item__header_titulo'>
        <BeepconsItemInfo
          value={userInput.nombre}
          title={true}
          sendEditedValues={()=>{sendEditedValues()}}
          handleChange={(e) => setUserInput({ ...userInput, nombre: e.target.value })}
          handleDoubleClick={() => setShowInputTitle(true)}
          handleBlur={() => setShowInputTitle(false)}
          showInput={showInputTitle} />
          
        </div>
        {/* </div> */}
      </motion.div>
      <motion.div
        className='beepcons-glass__body__content__item__text'
        whileHover={{ scale: 1.05 }}
        onHoverStart={e => { }}
        onHoverEnd={e => { }}
      >
        <BeepconsItemInfo
          value={desc}
          handleChange={(e) => setDesc(e.target.value)}
          handleDoubleClick={() => setShowInput(true)}
          handleBlur={() => setShowInput(false)}
          showInput={showInput} />
      </motion.div>
    </div>
  )
}
