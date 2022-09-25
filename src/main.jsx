import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//import screens
import PrincipalScreen from "./Screens/PrincipalScreen/PrincipalScreen";
import TurnosScreen from "./Screens/TurnosScreen/TurnosScreen";
import RecorridosScreen from "./Screens/RecorridosScreen/RecorridosScreen";
import MuseoScreen from "./Screens/MuseoScreen/MuseoScreen";
import BeepconsScreen from "./Screens/BeepconsScreen/BeepconsScreen";
//Theme

const clicked = () => {
  console.log("clicked");
};
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ThemeProvider } from "./context/theme-context";
import LogsProvider from "./context/logsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalScreen />,
  },
  {
    path: "/login",
    element: <div>Login Page</div>,
  },
  {
    path: "/museo",
    element: <MuseoScreen />,
  },
  {
    path: "/beepcons",
    element: <BeepconsScreen click={clicked} />,
  },
  {
    path: "/recorridos",
    element: <RecorridosScreen />,
  },
  {
    path: "/turnos",
    element: <TurnosScreen />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LogsProvider>
      <RouterProvider router={router} />
      </LogsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
