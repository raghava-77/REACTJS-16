import React, { Component } from 'react'
import Navbar from './Routing/Navbar'
import Register from './formhandling/regi/Register'
import Login from './formhandling/loging/Login'
import Emp1 from './tables/empdata2/Emp1'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
 class App extends Component {
   
   render() {
      return (
         <React.Fragment>
         <Router>
           <Navbar />
           <hr />
           <Switch>
             <Route path="/register" component={Register} />
             <Route path="/login" component={Login} />
             <Route path="/data" component={Emp1} />
           </Switch>
         </Router>
       </React.Fragment>
      );
   }
}

export default App


