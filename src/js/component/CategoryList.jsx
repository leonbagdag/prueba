import React from "react";
import "../../sass/main.scss";
import Category from "../component/Category";
import { Consumer } from "../store/appContext";

const CategoryList = () => {
  return (
    <section className="category-list">
      <Consumer>
        {({store, actions}) => {
          return store.categories.map((category, i) => {
            return (
                <div className="category-list__icon">
                    <Category category={category.name} key={i}/>
                    <h5>{category.name}</h5>
                </div>
            )
          })
        }}
        </Consumer>
    </section>
 
  );
};

export default CategoryList;
