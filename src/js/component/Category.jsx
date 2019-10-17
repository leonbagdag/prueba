import React from "react";
import "../../sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "truck-moving"
    };
  }

  render() {
    return (
      <div className="category-icon">
        <FontAwesomeIcon icon={this.state.icon} size="lg" />
      </div>
    );
  }
}

export default Category;
