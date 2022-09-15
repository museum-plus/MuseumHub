import React from 'react'
import NavigationGlass from '../../components/NavigationGlass/NavigationGlass'
import AlertasGlass from '../../components/AlertasGlass/AlertasGlass'
import TurnoGlass from '../../components/TurnoGlass/TurnoGlass'
import './PrincipalScreen.css'
export default function PrincipalScreen() {
  return (
    <div className='screen-blur screen-container'>
      <div className="screen">
        <NavigationGlass/> 
        <AlertasGlass/>
        <TurnoGlass/>
      </div>
    </div>
  )
}
