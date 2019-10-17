import React from "react";
import "../../sass/main.scss";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Register extends React.Component {
  render() {
    return (
      <main className="container">
        <div>
          <form className="register">
            <legend>
              <h1 className="logo main-logo">Logo</h1>
            </legend>

            <label>Nombre:</label>
            <input name="name" />

            <label>Apellido:</label>
            <input name="lastname" />

            <label>RUT:</label>
            <input name="rut" />

            <label>Email:</label>
            <input name="mail" type="email" />

            <label>Usuario:</label>
            <input name="username" />

            <label>Contraseña:</label>
            <input name="password" type="password" />

            <label>Foto de perfil:</label>
            <input name="thumbnail" type="file" />

            <button className="large-btn" type="submit">
              Crear cuenta
            </button>
          </form>
        </div>
      </main>
    );
  }
}

export default Register;
