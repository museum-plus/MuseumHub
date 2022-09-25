import React from 'react'
import "./LogsGlass.css"
import ThemeContext from "../../context/theme-context";
import { motion } from 'framer-motion';
import { LogsContext } from '../../context/logsContext';

export default function LogsGlass() {
    const {theme, handleTheme} = React.useContext(ThemeContext);
    const {logs} = React.useContext(LogsContext);
  return (
    <motion.div style={theme.glass} className='logs-glass__container'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 0.7,
        delay: 0.7,
        ease: [0, 0.71, 0.2, 1.01]
    }}
    >
        {logs?.map((log) => {
            return (
                <div className="log">
                    <p>{log.message}</p>
                </div>
                )
        })}
    </motion.div>
  )
}
