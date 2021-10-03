import React, { Component } from 'react'
 class Cotappliction extends Component {
     state={qty:1}
     incrhandle=()=>{
         this.setState({qty:this.state.qty +1})
     }
     dicrhandle=()=>{
        this.setState({qty:this.state.qty -1})
    }
    render() {
        return (
            <div>
               
                <button className="btn btn-success" onClick={this.incrhandle}>incr</button>
                <span>product aty:{this.state.qty}</span> 
                <button className="btn btn-success" onClick={this.dicrhandle}>dicr</button>             
                 </div>
        )
    }
}

export default Cotappliction
