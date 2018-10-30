import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
// import Professional from "./pages/professional/professional";
import School from "./pages/street-smart/street-smart";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Construction from "./pages/construction/construction";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/professional" component={Professional} /> */}
      <Route exact path="/street-smart" component={School} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/construction" component={Construction} />
    </Switch>
  </main>
);

export default Main;
