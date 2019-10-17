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
            case 1:
              icon = "couch"
              break;

            case 2:
              icon = "utensils"
              break;
            
            case 3:
              icon = "book"
              break;
            
            case 4:
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
