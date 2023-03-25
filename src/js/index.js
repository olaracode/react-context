//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./App.jsx";
// Dos vistas
// React-router-dom
// Un formulario
// ?

//render your react application
// BrowserRouter -> Es el proveedor de las rutas
// Routes -> Es una serie de rutas
// Route -> Es la ruta como tal
// Dentro de nuestro index es que necesitamos el router
ReactDOM.render(<App />, document.querySelector("#app"));
