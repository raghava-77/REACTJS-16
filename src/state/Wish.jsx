import React, { Component } from 'react'
 class Wish extends Component {
     state={
         a:"RAGHAVA"
     }
     gmhandle=()=>{
         this.setState({a:"RAGHAVA REDDY"})
     }
     gahandle=()=>{
        this.setState({a:"ROCK STAR RAGHAVA REDDY"})
    }
    ghhandle=()=>{
        this.setState({a:"STAR RAGHAVA REDDY"})
    }

    render() {
        return (
            <>
               <div class="conitaire">
                <div class="row">
                  <div class="col-md-6">
                     <div class="card">
                         <h1>hi my name is:{this.state.a}</h1>
                          </div>
                       <div class="card-header">
                           <button className="btn btn-primary mr-3px"onClick={this.gmhandle}>GM</button>
                           <button className="btn btn-success mr-3"onClick={this.gahandle}>GA</button>
                           <button className="btn btn-primary"onClick={this.ghhandle}>GH</button>
                     </div>
                   </div>
                </div>
             </div>
            </>
        )
    }
}

export default Wish
