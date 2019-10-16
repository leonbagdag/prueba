import React from "react";
import "../sass/main.scss";
import Category from "./Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ejemplo de título",
      description: "Soy una descripción"
    };
  }

  render() {
    return (
      <div className="task">
        <Category />
        <div className="task__main">
          <h3>{this.state.title}</h3>
          <p>{this.state.description}</p>
        </div>

        <div className="task__details">
          <p>
            <FontAwesomeIcon icon="map-marker-alt" />
            <span> Providencia</span>
          </p>

          <p>
            <FontAwesomeIcon icon="calendar-alt" />
            <span> 10/12/2019</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Task;
