import React, { Component } from 'react'
import Comp3 from './Comp3'

export class Comp2 extends Component {
    render() {
        return (
            <div>
                 <div class="container mt-4">
             <div class="row">
            <div class="col md-3">
             <div class="card"> 
                 <div class="card-body bg-primary text-white">
                <h1>Component-B</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                  <Comp3 pass2={this.props.pass1} />
                </div>
             </div>
        </div>
    </div>
</div>
            </div>
        )
    }
}

export default Comp2
