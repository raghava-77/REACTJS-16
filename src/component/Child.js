import React from 'react';
class Child extends React.Component {
    ChildData="10000USD";
    SendDataToParent= () =>{ 
        this.props.data(this.ChildData);
    }
    render(){
        return(
        <>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
        <h2>CHILD COMPONENT Data :{this.ChildData} </h2>
        <h3>Data from Parent - property:{this.props.asset}
        </h3>
        <button type="button" class="btn btn-primary" onClick={this.SendDataToParent}>Sendtoparent</button>
        </>
        );
    }
}
export default Child;