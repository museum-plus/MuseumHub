import React from 'react'
import MuseoGlass from '../../components/MuseoGlass/MuseoGlass'
import NavigationGlass from '../../components/NavigationGlass/NavigationGlass'
import './MuseoScreen.css'
export default function MuseoScreen() {
  return (
    <div className='screen-blur screen-container'>
    <div className="screen">
      <div className="row1">
        <NavigationGlass/> 
      </div>
      <div className='screen-museo'>
        <MuseoGlass/>
      </div>
    </div>
  </div>
  )
}
