import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faEdit);

ReactDOM.render(<App />, document.getElementById("root"));
