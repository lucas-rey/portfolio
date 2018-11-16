import React from "react";
import Main from "./main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const App = () => (
  <div>
    <Main />
  </div>
);

export default App;

// footer goes here
