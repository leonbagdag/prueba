import React from "react";
import "../sass/main.scss";
import Navbar from "./Navbar";
import Task from "./Task";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Task />
    </div>
  );
}

export default App;
