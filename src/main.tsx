import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home";
import { ListContextProvider } from "./components/ListContext";

ReactDOM.render(
  <React.StrictMode>
    <ListContextProvider>
      <Home />
    </ListContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
