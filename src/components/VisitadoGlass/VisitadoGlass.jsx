import React, { useContext } from 'react'
import './VisitadoGlass.css'
import Ojo from '../../assets/Ojo.jsx'
import Graph from './Graph.jsx'
import { motion } from "framer-motion"
import ThemeContext from '../../context/theme-context'
import { getRecorridos } from '../../database/getBeepcons'
function Position(props) {
  const styles = {primary: { color: props.color }}
  return (
    <div className='visitado-glass__body__content__text' style={styles.primary}>
      {props.nombre} - {props.cantidad}
    </div>
  )
}
export default function VisitadoGlass() {
  const { theme } = useContext(ThemeContext);
  const [mayor, setMayor] = React.useState(0);//Cantidad de turnos por recorrido
  const [medio, setMedio] = React.useState(0);
  const [menor, setMenor] = React.useState(0);
  const [mayorR, setMayorR] = React.useState("");//Nombre de los recorridos
  const [medioR, setMedioR] = React.useState("");
  const [menorR, setMenorR] = React.useState("");
  const getComparacion = async () => {
    let allRecorridos = await getRecorridos();
    allRecorridos.map((recorrido) => {
      const turnos = recorrido.turnos
      if (turnos.length > mayor) {
        setMayor(turnos.length)
        setMayorR(recorrido.nombre)
      } else if (turnos.length >= medio && turnos.length < mayor) {
        setMedio(turnos.length)
        setMedioR(recorrido.nombre)
      } else 
      if (turnos.length < medio) {
        setMenor(turnos.length)
        setMenorR(recorrido.nombre)
      }
    });
  }
React.useEffect(() => {
  getComparacion();
}, [mayor,medio,menor]);
return (
  <motion.div className='visitado-glass__container'
    style={theme.glass}
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
          <Ojo></Ojo>
        </div>
      </motion.div>
    </div>
    <div className='visitado-glass__body'>
      <div className='visitado-glass__body__content'>
        <Position color={theme.graph.mayor.color} nombre={mayorR} cantidad={mayor}/>
        <Position color={theme.graph.medio.color} nombre={medioR} cantidad={medio}/>
        <Position color={theme.graph.menor.color} nombre={menorR} cantidad={menor}/>
      </div>
      <div className='visitado-glass__body__graph'>
        <Graph data={{ menor, medio, mayor }}></Graph>
      </div>
    </div>
  </motion.div>
)
}