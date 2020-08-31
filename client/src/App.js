import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";

import Alerts from "./component/layout/Alerts";

import ContactState from "./context/contact/ContactState";

import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <ContactState>
      <AlertState>
        <Router>
          <Fragment className="App">
            <Navbar />
            <div className="container">
              <Alerts />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </ContactState>
  );
};

export default App;
