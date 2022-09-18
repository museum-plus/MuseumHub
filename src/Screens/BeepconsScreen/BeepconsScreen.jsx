import React from 'react'
import BeepconsGlass from '../../components/BeepconsGlass/BeepconsGlass'
import NavigationGlass from '../../components/NavigationGlass/NavigationGlass'
import './BeepconsScreen.css'
export default function BeepconsScreen() {
  return (
    <div className='screen-blur screen-container-beepcon'>
      <div className="row1">
        <NavigationGlass/> 
      </div>
      <div className='beepcon-row2'>
        <BeepconsGlass/>
      </div>
  </div>
  )
}
