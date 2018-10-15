import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import School from "./pages/school/school";
import About from "./pages/about/about";
import Construction from "./pages/construction/construction";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/school" component={School} />
      <Route exact path="/about" component={About} />
      <Route exact path="/construction" component={Construction} />
    </Switch>
  </main>
);

export default Main;
