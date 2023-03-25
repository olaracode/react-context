import React, { useContext } from "react";
import { UserContext } from "../App.jsx";

// Import useContext ->
// UserContext ->
const Profile = () => {
  const context = useContext(UserContext);
  return <div>perfil de {context.usuario.username}</div>;
};

export default Profile;
