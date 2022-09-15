import React from 'react'
import NavigationGlass from '../../components/NavigationGlass/NavigationGlass'
import AlertasGlass from '../../components/AlertasGlass/AlertasGlass'
export default function PrincipalScreen() {
  return (
    <div className='screen-blur'>
        <NavigationGlass/> 
        <AlertasGlass/>
    </div>
  )
}
