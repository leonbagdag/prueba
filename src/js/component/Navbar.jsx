import React from "react";
import "../../sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <FontAwesomeIcon icon="bars" size="lg" />
        <h1 className="logo">Logo</h1>
        
        <Link to="/new">
          <FontAwesomeIcon icon="edit" size="lg" /> 
        </Link>
        
      </nav>
    );
  }
}

export default Navbar;
