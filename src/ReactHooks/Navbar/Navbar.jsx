import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/home" className="navbar-brand">
            React Hooks
          </Link>

          <Link to="/Counter" className="navbar-brand">
            Counter
          </Link>
          <Link to="/Massage" className="navbar-brand">
            Massage
          </Link>
        </nav>
      </>
    );
  }
}
export default Navbar;  