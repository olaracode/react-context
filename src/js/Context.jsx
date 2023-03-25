import React, { createContext } from "react";

const initialValue = {
  username: "octavio",
  email: "octavio@4geeks.com",
};

// Estamos creando un contexto nuevo con el valor de initial value

const UserContext = React.createContext(initialValue);

export default UserContext;
