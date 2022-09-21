import React, { useContext } from 'react'
import MuseoGlass from '../../components/MuseoGlass/MuseoGlass'
import NavigationGlass from '../../components/NavigationGlass/NavigationGlass'
import './MuseoScreen.css'
import { motion } from 'framer-motion'
import ThemeContext from '../../context/theme-context'
export default function MuseoScreen() {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div className='screen-blur screen-container' style={theme.fondo}>
    <div className="screen">
      <div className="row1">
        <NavigationGlass/> 
      </div>
      <motion.div className='screen-museo'
      style={theme.glass}
        initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.9,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
        <MuseoGlass/>
        </motion.div>
    </div>
  </div>
  )
}
