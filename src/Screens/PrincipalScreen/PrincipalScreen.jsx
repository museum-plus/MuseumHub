import React from 'react'
import NavigationGlass from '../../components/NavigationGlass/NavigationGlass'
import AlertasGlass from '../../components/AlertasGlass/AlertasGlass'
import TurnoGlass from '../../components/TurnoGlass/TurnoGlass'
import VisitadoGlass from '../../components/VisitadoGlass/VisitadoGlass'
import './PrincipalScreen.css'
export default function PrincipalScreen() {
  return (
    <div className='screen-blur screen-container'>
      <div className="screen">
        <div className="row1">
          <NavigationGlass/> 
        </div>
        <div className="row2">
        <TurnoGlass/>
        <VisitadoGlass/>

        </div>
        <div className="row3">
        <AlertasGlass/>
        
        </div>
      </div>
    </div>
  )
}
