import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Create from "./Components/create";
import Post from "./Components/Post";

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact component={Post} path="/main" />
      <Route exact component={Create} path="/create" />
    </Switch>
  </Router>
);

export default App;
