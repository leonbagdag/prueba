import React from "react";
import "../sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Login extends React.Component {
  render() {
    return (
      <main className="container alpha-bg">
        <form className="login">
          <legend>
            <h1 className="logo main-logo">Logo</h1>
          </legend>
          <label>Usuario:</label>
          <input name="user" />

          <label>Contraseña:</label>
          <input name="user" type="password" />

          <button className="large-btn" type="submit">
            Ingresar
          </button>
        </form>
        <div className="social-media">
          <p>o inicia sesión con:</p>
          <div className="row social-media__buttons">
            <button className="small-btn facebook" type="submit">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
              acebook
            </button>
            <button className="small-btn google" type="submit">
              <FontAwesomeIcon icon={["fab", "google"]} />
              oogle
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
