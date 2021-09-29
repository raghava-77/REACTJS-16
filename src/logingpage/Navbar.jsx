import React, { Component } from 'react'

 class Navbar extends Component {
    render() {
        return <>
               <nav className="navbar navbar-dark bg-dark">
          <a href="/home" className="navbar-brand">React Application </a>
          <a href="/Loging" className="navbar-brand">Loging</a>
          <a href="/application" className="navbar-brand">Application</a>
        </nav>
               
               
               </>
    }
}

export default Navbar;
