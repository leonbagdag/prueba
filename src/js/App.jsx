import React from "react";
import "../sass/main.scss";
import Navbar from "./Navbar";
import Task from "./Task";
import Post from "./Post";
import Offer from "./Offer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Task />
      <Post />
      <Offer />
    </div>
  );
}

export default App;
