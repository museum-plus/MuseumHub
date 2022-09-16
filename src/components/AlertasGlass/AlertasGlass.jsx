import React from "react";
import bell from "../../assets/bell.svg";
import phone from "../../assets/phone.svg";
import "./AlertasGlass.css";
import { motion } from "framer-motion"


export default function AlertasGlass() {
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
    <div className="alertas-glass">
      <motion.div className="alertas-glass__header" whileTap={{ scale: 0.95 }}>
        <motion.div className="alertas-glass__header__text" >Alertas</motion.div>
        <div className="alertas-glass__header__icon">
          <img src={bell} alt="" />
        </div>
      </motion.div>
      <div className="alertas-glass__body">
        {alerts.map((alert, index) => {
          return (
            <div key={alert.id} className="alertas-glass__body__alert">
              <div className="alertas-glass__body__alert__icon">
                <img src={`${phone}`} alt="..." />
              </div>
              <div className="alertas-glass__body__alert__text">
                {alert.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
