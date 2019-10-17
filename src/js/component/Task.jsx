import React from "react";
import "../../sass/main.scss";
import Category from "./Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Task extends React.Component {

  render() {
    return (
      <div className="task">
        <div className="task__main">
          <Category category={this.props.category} />
          <div className="task__main__content">
            <h3>{this.props.title}</h3>
            {/* <p>{this.props.description}</p> */}
            
            <div className="task__details">
              <div>
                <FontAwesomeIcon icon="map-marker-alt" />
                <span> {this.props.location} </span>
              </div>

              <div>
                <FontAwesomeIcon icon="calendar-alt" />
                <span className="task__details__date"> {this.props.date} </span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default Task;
