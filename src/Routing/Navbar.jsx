import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/home" className="navbar-brand">
            React Routing
          </Link>
          <Link to="/data" className="navbar-brand">
            Employee Data
          </Link>
          <Link to="/login" className="navbar-brand">
            Login
          </Link>
          <Link to="/register" className="navbar-brand">
            Register
          </Link>
        </nav>
      </>
    );
  }
}
export default Navbar;