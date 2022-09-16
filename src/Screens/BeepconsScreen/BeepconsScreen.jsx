import React from 'react'
import BeepconsGlass from '../../components/BeepconsGlass/BeepconsGlass'
import NavigationGlass from '../../components/NavigationGlass/NavigationGlass'
import './BeepconsScreen.css'
export default function BeepconsScreen() {
  return (
    <div className='screen-blur screen-container'>
    <div className="screen">
      <div className="row1">
        <NavigationGlass/> 
      </div>
        <BeepconsGlass/>
    </div>
  </div>
  )
}
