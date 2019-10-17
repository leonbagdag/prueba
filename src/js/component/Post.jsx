import React from "react";
import "../../sass/main.scss";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Post extends React.Component {
  render() {
    return (
      <form>
        <legend>
          <h2>Crea una nueva tarea</h2>
        </legend>
        <label>Título</label>
        <input
          name="title"
          placeholder="Describe brevemente qué necesitas"
          required
        />
        <label>Fecha</label>
        <input type="date" name="date" required />
        <label>Lugar</label>
        <select>
          <option value="">
            --Selecciona la comuna donde ocurrirá la tarea--
          </option>
          <option value="Providencia">Providencia</option>
          <option value="Las Condes">Las Condes</option>
          <option value="Vitacura">Vitacura</option>
        </select>
        <label>Descripción</label>
        <textarea
          name="description"
          minLength="20"
          maxLength="200"
          rows="5"
          placeholder="Explica los detalles de tu tarea: en qué consiste, cuánto tiempo durará, qué esperas que se cumpla"
          required
        />
        <label>Pago ofrecido</label>
        <div className="row">
          $
          <input
            id="offeredPayment"
            name="offeredPayment"
            placeholder="ej: 10.000"
            required
          />
        </div>

        <button className="large-btn" type="submit">
          Enviar
        </button>
      </form>
    );
  }
}

export default Post;
