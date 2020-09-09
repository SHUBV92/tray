// Packages
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { baseRoutes } from "./constants/routes";

// Components
import Navbar from "./containers/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {baseRoutes.map((route) => (
            <Route path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
