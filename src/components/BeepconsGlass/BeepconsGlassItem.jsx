import React from 'react'
import Punto from '../TurnoGlass/Punto'
import { motion } from "framer-motion"
import './BeepconsGlassItem.css'
export default function BeepconsGlassItem(props) {
  return (
    <motion.div className='beepcons-glass__body__content__item' whileHover={{translateX: 5}}>
      <div className='beepcons-glass__body__content__item__header'>
        <div className='beepcons-glass__body__content__item__header_icon'>
          <Punto color={props.color}></Punto>
        </div>
        <div className='beepcons-glass__body__content__item__header_titulo'>
          Punto
        </div>
      </div>
      <div className='beepcons-glass__body__content__item__text'>
        {props.desc}
      </div>
    </motion.div>
  )
}
