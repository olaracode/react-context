import React, { useContext } from "react";
import { UserContext } from "../App.jsx";
import { useNavigate } from "react-router";
// react router dom tiene hooks, usar la navegacion programaticamente

const initialValue = {
  email: "",
  username: "",
  password: "",
};

const Login = () => {
  // const [user, setUser] = useState(initialValue)
  const navigate = useNavigate();
  // declararamos useNavigate

  // Declaro mi contexto
  const context = useContext(UserContext); // -> context de app.jsx
  // reemplazando mi estado local por el del contexto
  // reemplazando mi funcion local por la del contexto
  const user = context.usuario; // Me traigo al usuario de app.jsx
  const handleChange = context.funcionContexto; // la funcion para modificarlo de app.jsx
  // const handleChange = (event) => {
  // setUser({...user, [event.target.name]: event.target.value})
  //}
  const redirectOnLogin = () => {
    console.log("lo redireccione a su perfil");
    navigate("/profile");
  };
  return (
    <div className="card w-75 m-auto my-5">
      <div className="card-header">Inicie Sesión en nuestra pagina</div>
      <div className="card-body">
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(event) => handleChange(event)}
          className="form-control"
        />
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(event) => handleChange(event)}
          className="form-control"
        />
        <input
          type="password"
          name="password"
          onChange={(event) => handleChange(event)}
          value={user.password}
          className="form-control"
        />
        <button onClick={() => redirectOnLogin()}>Inicia sesion</button>
      </div>
    </div>
  );
};

export default Login;
