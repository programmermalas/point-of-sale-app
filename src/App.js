import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./views/Menu";
import Checkout from "./views/Checkout";
import Order from "./views/Order";
import Success from "./views/Success";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/success">
          <Success />
        </Route>

        <Route path="/order">
          <Order />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/:sub_menu?">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
