import React from 'react'
import "./LogsGlass.css"
import ThemeContext from "../../context/theme-context";
import { LogsContext } from '../../context/logsContext';

export default function LogsGlass() {
    const {theme, handleTheme} = React.useContext(ThemeContext);
    const {logs} = React.useContext(LogsContext);
  return (
    <div style={theme.glass} className='logs-glass__container'>
        {logs?.map((log) => {
            return (
                <div className="log">
                    <p>{log.message}</p>
                </div>
                )
        })}
    </div>
  )
}
