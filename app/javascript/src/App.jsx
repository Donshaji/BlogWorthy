import React from "react";

import { either, isEmpty, isNil } from "ramda";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { getFromLocalStorage } from "utils/storage";

import { PrivateRoute } from "./Components/common";
import Create from "./Components/create";
import Post from "./Components/Post";
import Show from "./Components/Post/Show";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";

const App = () => {
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken);

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact component={Show} path="/posts/:slug/show" />
        <Route exact component={Post} path="/main" />
        <Route exact component={Create} path="/main/create" />
        <Route exact component={Signup} path="/signup" />
        <Route exact component={Login} path="/login" />
        <PrivateRoute
          component={Post}
          condition={isLoggedIn}
          path="/"
          redirectRoute="/login"
        />
      </Switch>
    </Router>
  );
};

export default App;
