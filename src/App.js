// Packages
import React from "react";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction"

import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link,
} from "react-router-dom";

import { baseRoutes } from "./constants/routes";

// Components
import User from "./containers/user/User.jsx";
import Navbar from "./containers/navbar/Navbar";

const App = (props) => {
  
const simpleAction = (event) => {
  props.simpleAction()
}

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
        <button onClick={simpleAction}>Test Redux Action</button>
      <pre>
        {JSON.stringify(props)}
      </pre>
      </div>
    </Router>
  );
};
const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);


