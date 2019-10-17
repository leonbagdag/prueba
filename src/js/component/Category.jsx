import React from "react";
import "../../sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Consumer } from "../store/appContext";

class Category extends React.Component {
  
  
  render() {
    return (
      <Consumer>
        {({store}) => {
          let icon = ""
          
          switch (this.props.category) {
            case "furniture":
              icon = "couch"
              break;

            case "cooking":
              icon = "utensils"
              break;
            
            case "homework":
              icon = "book"
              break;
            
            case "pets":
              icon = "paw"
              break;
          
            default:
              icon = "star"
              break;
          }

          return (
            <div className="category-icon">
        <FontAwesomeIcon icon={icon} size="lg" />
      </div>
          )
        }}
      
      </Consumer>
    );
  }
}

export default Category;
