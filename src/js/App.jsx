import React from "react";
import "../sass/main.scss";
import Navbar from "./Navbar";
import Task from "./Task";
import Post from "./Post";
import Details from "./Details";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Login />
      <Navbar />
      <Task />
      <Post />
      <Details />
    </div>
  );
}

export default App;
