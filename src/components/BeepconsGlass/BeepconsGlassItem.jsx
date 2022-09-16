import React, { useState } from 'react'
import Punto from '../TurnoGlass/Punto'
import { motion } from "framer-motion"
import './BeepconsGlassItem.css'
import BeepconsItemInfo from './BeepconsItemInfo';
export default function BeepconsGlassItem(props) {
  const [punto, setPunto] = useState(props.punto);
  const [desc, setDesc] = useState(props.desc);
  const [showInput, setShowInput] = useState(false);
  const [showInputTitle, setShowInputTitle] = useState(false);

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
          value={punto}
          title={true}
          handleChange={(e) => setPunto(e.target.value)}
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
