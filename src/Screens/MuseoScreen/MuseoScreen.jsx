import React from 'react'
import MuseoGlass from '../../components/MuseoGlass/MuseoGlass'
import NavigationGlass from '../../components/NavigationGlass/NavigationGlass'
import './MuseoScreen.css'
import { motion } from 'framer-motion'
export default function MuseoScreen() {
  return (
    <div className='screen-blur screen-container'>
    <div className="screen">
      <div className="row1">
        <NavigationGlass/> 
      </div>
      <motion.div className='screen-museo'
        initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
        <MuseoGlass/>
        </motion.div>
    </div>
  </div>
  )
}
