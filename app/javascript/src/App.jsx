import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Post from "./Components/Post";

const App = () => (
  <Router>
    <Switch>
      <Route exact component={Post} path="/" />
      <Route exact path="/about" render={() => <div>About</div>} />
    </Switch>
  </Router>
);

export default App;
