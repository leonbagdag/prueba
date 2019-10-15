import React from "react";
import "../sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <FontAwesomeIcon icon="bars" size="lg" />
        <FontAwesomeIcon icon="edit" size="lg" />
      </nav>
    );
  }
}

export default Navbar;
