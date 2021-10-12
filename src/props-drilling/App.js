import React, { Component } from 'react'
import Comp1 from "./Comp1"

 class App extends Component {
    state={
       mass:{
             Name:"Raghava",
             Age:55
       }
    }
   render() {
      return (
         <div>
            <pre> Name: {this.state.mass.name}</pre>
        <pre>age: {this.state.mass.project}</pre>
         <Comp1 pass={this.state.mass}/>
         </div>
      )
   }
}

export default App


