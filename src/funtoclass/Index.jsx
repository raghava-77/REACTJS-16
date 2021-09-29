import React, { Component } from 'react'
import From from './From'
 class index extends Component {
       render() {
        let name='ramu';
        var age='55'
        var adr=['ben','mar','fivecros']
    
    
        return (
            <div>
                <From a={name} />
            <h1>hi hello how are your</h1>
            <h2> my adderss:{adr [0]}, {adr[1]},{adr[2]}</h2>

            </div>  
        )
    }
}

export default index
