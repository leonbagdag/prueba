import React from "react";
import "../sass/main.scss";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Offer extends React.Component {
  render() {
    return (
      <form>
        <legend>
          <h3>Postula a esta tarea</h3>
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

        <label>Pago propuesto</label>
        <div className="row">
          $
          <input
            id="payment"
            name="payment"
            placeholder="Puedes aceptar el pago ofrecido o sugerir uno diferente"
            required
          />
        </div>

        <button className="small-btn" type="submit">
          Enviar
        </button>
      </form>
    );
  }
}

export default Offer;
