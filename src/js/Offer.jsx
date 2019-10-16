import React from "react";
import "../sass/main.scss";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Offer extends React.Component {
  render() {
    return (
      <form>
        <legend>
          <h2>Postula a esta tarea</h2>
        </legend>
        <label>
          Explica por qué eres la persona indicada para completar esta tarea
        </label>
        <textarea
          name="description"
          minLength="20"
          maxLength="200"
          rows="5"
          placeholder="Detalla todas las razones que te hacen la persona ideal (experiencia, cercanía, gustos, entre otros)"
          required
        />
        <label>Pago ofrecido</label>
        $
        <input id="payment" name="payment" placeholder="ej: 10.000" required />
        <button className="large-btn" type="submit">
          Enviar
        </button>
      </form>
    );
  }
}

export default Offer;
