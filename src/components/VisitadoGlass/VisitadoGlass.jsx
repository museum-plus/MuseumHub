import React from 'react'
import './VisitadoGlass.css'
import ojo from '../../assets/ojo.svg'
import Graph from './Graph.jsx'
import { motion } from "framer-motion"

function Position(props) {
  const styles = {
    primary: { color: props.color }
  }
  return (
    <div className='visitado-glass__body__content__text' style={styles.primary}>
      1 - Arte europeo
    </div>
  )
}
export default function VisitadoGlass(props) {
  return (
<motion.div className='visitado-glass__container'
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div className='visitado-glass__header'>
        <motion.div className='visitado-glass__header__text' whileTap={{ scale: 0.95 }}>
          Más visitado
          <div className='icon__calendar'>
            <img src={ojo} alt="icon" />
          </div>
        </motion.div>
      </div>
      <div className='visitado-glass__body'>
        <div className='visitado-glass__body__content'>
          <Position color="#EEC740" />
          <Position />
          <Position />
        </div>
        <div className='visitado-glass__body__graph'>
          <Graph></Graph>
        </div>
      </div>
      </motion.div>
  )
}