<<<<<<< Updated upstream
import React from 'react'
import './VisitadoGlass.css'
import ojo from '../../assets/ojo.svg'
import Graph from './Graph.jsx'
function Position(props){
  const styles = {
    primary:{color:props.color}
  }
  return(
    <div className='visitado-glass__body__content__text' style={styles.primary}>
      1 - Arte europeo
    </div>
  )
}
export default function VisitadoGlass(props) {
  return (
        <div className='visitado-glass__container'>
      <div className='visitado-glass__header'>
        <div className='visitado-glass__header__text'>
          Más visitado
          <div className='icon__calendar'>
            <img src={ojo} alt="icon" />
          </div>
        </div>
      </div>
      <div className='visitado-glass__body'>
        <div className='visitado-glass__body__content'>
          <Position color="#EEC740"/>
          <Position/>
          <Position/>
        </div>
        <div className='visitado-glass__body__graph'>
            <Graph></Graph>
        </div>
      </div>
    </div>
  )
=======
import React from "react";
import "./VisitadoGlass.css";
import ojo from "../../assets/ojo.svg";
import Graph from "./Graph.jsx";
export default function VisitadoGlass() {
  return (
      <div className="visitado-glass__container">
        <div className="visitado-glass__header">
          <div className="visitado-glass__header__text">
            Más visitado
            <div className="icon__calendar">
              <img src={ojo} alt="icon" />
            </div>
          </div>
        </div>
        <div className="visitado-glass__body">
          <div className="visitado-glass__body__content">
            <div className="visitado-glass__body__content__text">
              1- Arte europeo
            </div>
            <div className="visitado-glass__body__content__text">
              1- Arte europeo
            </div>
            <div className="visitado-glass__body__content__text">
              1- Arte europeo
            </div>
          </div>
          <div className="visitado-glass__body__graph">
            <Graph></Graph>
          </div>
        </div>
      </div>
  );
>>>>>>> Stashed changes
}
