import React from "react";
import "../../sass/main.scss";
import Task from "../component/Task";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Task />
    </div>
  );
};

export default Home;
