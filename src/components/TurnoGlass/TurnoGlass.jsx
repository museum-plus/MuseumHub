import React from 'react'
import './TurnoGlass.css'
import Calendar from './Calendar'
export default function TurnoGlass() {
  return (
    <div className='container-turnoglass'>
        <div className='header-turnoglass'>
          <div className='titulo-turnoglass'>
            Turnos Pendientes
          </div>
          <div className='icon-calendar'>
            <Calendar/>
          </div>
        </div>

    </div>
  )
}
