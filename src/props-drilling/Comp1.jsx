import React, { Component } from 'react'
import Comp2 from './Comp2'

export class Comp1 extends Component {
    render() {
        return (
            <div>
                <div class="container mt-4">
             <div class="row">
            <div class="col md-3">
             <div class="card"> 
                 <div class="card-body bg-success text-white">
                <h1>Component-A</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                  <Comp2 pass1={this.props.pass} />
                   </div>
             </div>
        </div>
    </div>
</div>
            </div>
        )
    }
}

export default Comp1
