import React from 'react'
import './TurnoGlass.css'
import calendar from '../../assets/calendar.svg'
export default function TurnoGlass() {
  return (
    <div className='container-turnoglass'>
        <div className='header-turnoglass'>
          <div className='titulo-turnoglass'>
            Turnos Pendientes
          </div>
          <div className='icon-calendar'>
          <img src={calendar} alt="icon" />
          </div>
        </div>
        <div className='body-turnoglass'>

        </div>
    </div>
  )
}
