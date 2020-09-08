// Packages
import React, { useState } from "react";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";
import { useHistory } from "react-router-dom"

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
import Done from "./containers/done/Done.jsx";

const App = (props) => {
  const [userDetails, setUserDetails] = useState("");

  const history = useHistory()
  console.log("history", history)

  const routeChange = () => {
    let path = `newPath`
    history.push(path)
  }

  const simpleAction = (event) => {
    props.simpleAction();
  };

  const submitUserDetails = (userDetails) => {
    setUserDetails(userDetails);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {baseRoutes.map((route) => {
            return (
              <Route path={route.path}>
                {route.name === "Done" ? (
                  <Done userDetails={userDetails} />
                ) : route.name === "User" ? (
                  <User submitUserDetails={submitUserDetails}/>
                ) : (
                  route.component
                )}
              </Route>
            );
          })}
        </Switch>
        <button onClick={routeChange}
        // ={() => {
        //   history.goBack()
        // }}
        >next</button>
        <button onClick={simpleAction}>
          Test Redux Action
        </button>
        <pre>{JSON.stringify(props)}</pre>
      </div>
    </Router>
  );
};


const mapStateToProps = (state) => {
  console.log("state", state)

  return ({
    userDetails: state.userDetails 
  })
}

const mapDispatchToProps = (dispatch) => ({
  simpleAction: (userDetails) => dispatch(simpleAction(userDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

