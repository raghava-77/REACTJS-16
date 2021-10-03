import React, { Component } from 'react'

 class Constrctor extends Component {

     constructor(y){
         super(y)
         this.state={
             mass:"hi hello",
             name:"raghava"
         }
     }
     pass=()=>{
        this.setState({mass:"hi hello",name:"raghava"})
     }
     less=(x,y)=>{
         this.setState({mass:x,name:y})
     }
    render() {
        return (
            <>
                <h1>hii:{this.state.mass} ---------{this.state.name}</h1>
                <button className="btn btn-success mr-4"onClick={this.less.bind(this,"hello how are your","vishwajeet")}>pre</button>
                <button className="btn btn-success mr-2" onClick={this.pass}>inc</button>
            </>
        )
    }
}

 export default Constrctor;
