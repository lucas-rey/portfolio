import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import ADP from "./pages/adp/adp";
import LoveMyself from "./pages/lovemyself/lovemyself";
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
      <Route exact path="/adp" component={ADP} />
      <Route exact path="/lovemyself" component={LoveMyself} />
      <Route exact path="/street-smart" component={StreetSmart} />
      <Route exact path="/vietnam" component={Vietnam} />
      <Route exact path="/endangered-species" component={VideoGame} />
      <Route exact path="/mousai" component={Mousai} />
      <Route exact path="/brevet" component={Brevet} />
      <Route exact path="/vcu" component={Vcu} />
    </Switch>
  </main>
);

export default Main;
