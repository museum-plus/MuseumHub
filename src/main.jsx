import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//import screens
import PrincipalScreen from "./Screens/PrincipalScreen";
import TurnosScreen from "./Screens/TurnosScreen";
import RecorridosScreen from "./Screens/RecorridosScreen";
import MuseoScreen from "./Screens/MuseoScreen";
import BeepconsScreen from "./Screens/BeepconsScreen";



import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

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
    element: <BeepconsScreen />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
