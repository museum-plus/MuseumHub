import React, { useContext } from "react";
import bell from "../../assets/bell.svg";
import phone from "../../assets/phone.svg";
import "./AlertasGlass.css";
import { motion } from "framer-motion"
import ThemeContext from "../../context/theme-context";
import BellIcon from "../../assets/BellIcon";
import PhoneIcon from "../../assets/PhoneIcon";

export default function AlertasGlass() {
  const { theme, handleTheme } = useContext(ThemeContext);
  const [alerts, setAlerts] = React.useState([
    {
      id: 1,
      title: "Dispositivo conectado a punto 6",
    },
    {
      id: 2,
      title: "Dispositivo conectado a punto 3",
    },
  ]);
  return (
    <motion.div className="alertas-glass"
    style={theme.glass}
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <motion.div 
      className="alertas-glass__header" 
      whileTap={{ scale: 0.95 }}>
        <motion.div className="alertas-glass__header__text" >Alertas</motion.div>
        <div className="alertas-glass__header__icon">
          <BellIcon></BellIcon>
        </div>
      </motion.div>
      <div className="alertas-glass__body">
        {alerts.map((alert, index) => {
          return (
            <div key={alert.id} className="alertas-glass__body__alert">
              <div className="alertas-glass__body__alert__icon">
                <PhoneIcon/>
              </div>
              <div className="alertas-glass__body__alert__text">
                {alert.title}
              </div>
            </div>
          );
        })}
      </div>
      </motion.div>
  );
}
