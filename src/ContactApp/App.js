import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./ContactApp/Navbar/Navbar";
import ContactApp from "./ContactApp/Contactapp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/contact" component={ContactApp} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;