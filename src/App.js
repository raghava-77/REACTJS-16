import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./React - UseState-Object.jsx/Navber/Navber";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./React - UseState-Object.jsx/Cart";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;