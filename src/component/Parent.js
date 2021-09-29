import React from 'react';
import Child from './Child'

import './parent.css'

class Parent extends React.Component{
    
    state={
        ChildData:'8555',
        assert   :'5946'
    };
    input2child=()=>{
        this.setState({asset:"50000USD"})
    }
    receivedata=(value)=>{
        console.log("Data from Child",value);
        this.setState({ChildData: value});
    }
    render(){
        
        return(
        <div>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
        <h1>Hello</h1>
        <h2>PARENT COMPONENT Asset value{this.state.asset}</h2>
        <h3>Receiving Data From Child:{this.state.ChildData}</h3>
        <button type="button" class="btn btn-primary" onClick ={this.input2child}>change value</button>
        <br/>
        <Child asset={this.state.asset} data={this.receivedata}/>
        {/* <button onClick ={this.input2child}>Send 50k to Child</button> */}
        </div>
        )
    }
}
export default Parent;