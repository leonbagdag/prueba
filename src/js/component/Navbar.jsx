import React from "react";
import "../../sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <FontAwesomeIcon icon="bars" size="lg" />
        <h1 className="logo">Logo</h1>
        <FontAwesomeIcon icon="edit" size="lg" />
      </nav>
    );
  }
}

export default Navbar;
