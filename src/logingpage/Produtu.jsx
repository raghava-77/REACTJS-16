import React, { Component } from 'react'

export class Produtu extends Component {
    image="https://rukminim1.flixcart.com/image/495/594/kpodocw0/watch/3/3/h/brand-a-digital-watch-with-square-led-shockproof-multi-original-imag3vybqqmu7h7w.jpeg?q=50";
    render() {
        return (
        <>
            <div class="container mt-12" >
                  <div class="row-md-6">
                     <div class="col-md-4"></div>
                        <div className="col-md-3">
                        <div class="card">
                           <div class="card-header">
                               <img src={this.image} width="150px" height="200px"/>
                           </div>
                              <div class="card-body">
                                 <h1> Product Name: Watch</h1>
                                  <h2>price:855</h2>
                            </div>
                        </div>
                        <div class="card">
                           <div class="card-header">
                               <img src={this.image} width="150px" height="200px"/>
                           </div>
                              <div class="card-body">
                                 <h1> Product Name: Watch</h1>
                                  <h2>price:855</h2>
                            </div>
                        </div>
                        <div class="card">
                           <div class="card-header">
                               <img src={this.image} width="150px" height="200px"/>
                           </div>
                              <div class="card-body">
                                 <h1> Product Name: Watch</h1>
                                  <h2>price:855</h2>
                            </div>
                        </div>
                      </div>
                      </div>
                      
                      </div>
                      
                
                    
                    
            
</>
                
        
        )
    }
}

export default Produtu
