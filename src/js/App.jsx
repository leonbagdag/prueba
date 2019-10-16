import React from "react";
import "../sass/main.scss";
import Navbar from "./Navbar";
import Task from "./Task";
import Post from "./Post";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Task />
      <Post />
      <Details />
    </div>
  );
}

export default App;
