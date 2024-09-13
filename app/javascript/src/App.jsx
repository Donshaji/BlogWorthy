import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Create from "./Components/create";
import Post from "./Components/Post";
import Show from "./Components/Post/Show";
import Signup from "./Components/User/Signup";

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact component={Show} path="/posts/:slug/show" />
      <Route exact component={Post} path="/main" />
      <Route exact component={Create} path="/main/create" />
      <Route exact component={Signup} path="/signup" />
    </Switch>
  </Router>
);

export default App;
