import React, { Component } from "react";
import Navbar from "./lifecycle/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DigitalWatch from "./lifecycle/DigitalWatch";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/digital" exact component={DigitalWatch}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

