import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import School from "./pages/school/school";
// import Callback from "./pages/callback/callback";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />{" "}
      {
        // <Route exact path="/callback" component={Callback} />
        <Route exact path="/school" component={School} />
      }{" "}
    </Switch>
  </main>
);

export default Main;
