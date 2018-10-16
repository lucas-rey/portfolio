import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Professional from "./pages/professional/professional";
import School from "./pages/school/school";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/professional" component={Professional} />
      <Route exact path="/school" component={School} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </main>
);

export default Main;
