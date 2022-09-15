import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <div>Login Page</div>,
  },
  {
    path: "/museo",
    element: <div>Museo Page</div>,
  },
  {
    path: "/beepcons",
    element: <div>Beepcons Page</div>,
  },
  {
    path: "/recorridos",
    element: <div>Recorridos Page</div>,
  },
  {
    path: "/turnos",
    element: <div>Turnos Page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
