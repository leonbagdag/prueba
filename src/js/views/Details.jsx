import React from "react";
import Navbar from "../component/navbar";
import Offer from "../component/offer";
import "../../sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ejemplo de título",
      date: "12/12/19",
      location: "Providencia",
      description:
        "Ejemplo de una descripción de una tarea, con muchos detalles",
      price: "15.000"
    };
  }

  render() {
    return (
      <>
        <Navbar />
        <header>
          <h2>{this.state.title}</h2>
        </header>
        <div className="row details">
          <div className="details__date">
            <h3>¿Cuándo?</h3>
            <p>{this.state.date}</p>
          </div>
          <div className="details__location">
            <h3>¿Dónde?</h3>
            <p>{this.state.location}</p>
          </div>
          <div className="details__pin">
            <FontAwesomeIcon icon="map-marker-alt" />
            <p>Mapa</p>
          </div>
        </div>
        <main className="details__description">
          <div className="row details__title">
            <h3>Descripción</h3>
            <div className="details__price">
              <small>Pago ofrecido</small>
              <h3>$ {this.state.price}</h3>
            </div>
          </div>
          <p className="details__text">{this.state.description}</p>
        </main>
        <Offer />
      </>
    );
  }
}

export default Details;
