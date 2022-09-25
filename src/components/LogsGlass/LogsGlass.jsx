import React from 'react'
import "./LogsGlass.css"
import ThemeContext from "../../context/theme-context";

export default function LogsGlass() {
    const {theme, handleTheme} = React.useContext(ThemeContext);
  return (
    <div style={theme.glass} className='logs-glass__container'>
        LogsGlass
    </div>
  )
}
