import React, { useContext } from 'react'
import BeepconsGlass from '../../components/BeepconsGlass/BeepconsGlass'
import NavigationGlass from '../../components/NavigationGlass/NavigationGlass'
import ThemeContext from '../../context/theme-context';
import './BeepconsScreen.css'
export default function BeepconsScreen() {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div className='screen-blur screen-container-beepcon' style={theme.fondo}>
      <div className="row1">
        <NavigationGlass/> 
      </div>
      <div className='beepcon-row2'>
        <BeepconsGlass/>
      </div>
  </div>
  )
}
