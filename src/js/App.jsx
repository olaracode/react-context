import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./views/Profile.jsx";
import Login from "./views/Login.jsx";

// Browser Router envuelve a las rutas
// Y las rutas tienen dentro cada vista
// <Route path="/direccion" element={<vista/>} />

// importar createContext desde react
// UserContext es el nombre del contexto nada mas
export const UserContext = createContext();

const App = () => {
  // declaro user que es el valor que voy a compartir en el contexto
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  // una funcion que recibe un evento y modifica al contexto
  const handleChangeContext = (event) => {
    console.log(event.target.name);
    // la formula del principio
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // declarando un objeto con los valores de mi contexto
  const contextValue = {
    usuario: user, // linea 15
    funcionContexto: handleChangeContext, // linea 17
  };

  return (
    <UserContext.Provider value={contextValue}>
      {/* Envuelvo mi aplicacion con UserContext.Provider */}
      <BrowserRouter>
        <Routes>
          {/* Pagina de Inicio */}
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
