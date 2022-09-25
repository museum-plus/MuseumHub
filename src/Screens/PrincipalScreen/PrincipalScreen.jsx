//#region Imports
import React, {useContext} from "react";

import NavigationGlass from "../../components/NavigationGlass/NavigationGlass";
import AlertasGlass from "../../components/AlertasGlass/AlertasGlass";
import TurnoGlass from "../../components/TurnoGlass/TurnoGlass";
import VisitadoGlass from "../../components/VisitadoGlass/VisitadoGlass";
import LogsGlass from "../../components/LogsGlass/LogsGlass";
import CounterGlass from "../../components/CounterGlass/CounterGlass";

import "./PrincipalScreen.css";

import ThemeContext, { ThemeProvider } from "../../context/theme-context";
//#endregion Imports

export default function PrincipalScreen() {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <>
    <div className="screen-blur screen-container" style={theme.fondo}>
        <div className="row1">
          <NavigationGlass />
        </div>
        <div className="row2">
          <div className="col col1">
            <TurnoGlass />
            <AlertasGlass />
          </div>
          <div className="col col2">    
            <VisitadoGlass />
            <CounterGlass />
            <LogsGlass />
          </div>
        </div>
      </div>
    </>
  );
}
