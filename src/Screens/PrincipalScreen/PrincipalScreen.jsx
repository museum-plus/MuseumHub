import React from "react";
import NavigationGlass from "../../components/NavigationGlass/NavigationGlass";
import AlertasGlass from "../../components/AlertasGlass/AlertasGlass";
import TurnoGlass from "../../components/TurnoGlass/TurnoGlass";
import VisitadoGlass from "../../components/VisitadoGlass/VisitadoGlass";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../database/db";
import "./PrincipalScreen.css";
import ThemeContext, { ThemeProvider } from "../../context/theme-context";
import { useContext } from "react";
export default function PrincipalScreen() {
  const { theme, handleTheme } = useContext(ThemeContext);
  console.log(theme.glass);
  return (
    <div className="screen-blur screen-container" style={theme.fondo}>
      <div className="screen">
        <div className="row1">
          <NavigationGlass />
        </div>
        <div className="row2">
          <TurnoGlass />
          <VisitadoGlass />
        </div>
        <div className="row3">
          <AlertasGlass />
        </div>
      </div>
    </div>
  );
}
