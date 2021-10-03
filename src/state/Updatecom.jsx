import React, { Component } from 'react'
 class Updatecom extends Component {
     state={
         name:"Raghava"
        
     };
   submit= ()=>{
       this.setState({name:"ROCK STAR RAGHAVA"});
   };
    render() {
        return (
            <React.Fragment>
            <h1>hi my name is: {this.state.name}</h1>
            <button onClick={this.submit}>submit</button>
            </React.Fragment>
        )
    }
}

export default Updatecom;

