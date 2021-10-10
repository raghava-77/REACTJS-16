import React, { Component } from 'react'

export class Comp3 extends Component {
    render() {
        return (
            <div>
                 <div class="container mt-4">
             <div class="row">
            <div class="col md-3">
             <div class="card"> 
                 <div class="card-body bg-secondary text-white">
                <h1>Component-C</h1>
                <h2>Name:{this.props.pass2.Name}</h2>
                <h3>age:{this.props.pass2.Age}</h3>
                </div>
             </div>
        </div>
    </div>
</div>
            </div>
        )
    }
}

export default Comp3
