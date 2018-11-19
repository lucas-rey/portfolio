import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Work from "./pages/work/work";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Adp from "./pages/adp/adp";
import StreetSmart from "./pages/street-smart/street-smart";
import Vietnam from "./pages/vietnam/vietnam";
import VideoGame from "./pages/video-game/video-game";
import Mousai from "./pages/mousai/mousai";
import Brevet from "./pages/brevet/brevet";
import Vcu from "./pages/vcu/vcu";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/adp" component={Adp} />
      <Route exact path="/street-smart" component={StreetSmart} />
      <Route exact path="/vietnam" component={Vietnam} />
      <Route exact path="/video-game" component={VideoGame} />
      <Route exact path="/mousai" component={Mousai} />
      <Route exact path="/brevet" component={Brevet} />
      <Route exact path="/vcu" component={Vcu} />
    </Switch>
  </main>
);

export default Main;
