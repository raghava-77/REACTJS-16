import React, { Component } from 'react'

 class Tablestate extends Component {
     state={
         product_name:"realme 8i",
         image:"https://rukminim1.flixcart.com/image/416/416/ktbu6q80/mobile/q/g/q/8i-rmx3151-realme-original-imag6zhnbsuhcqny.jpeg?q=70",
         price:20000,
         quty:1,

     }
     decrHandler=()=>{
         if(this.state.quty!=0)
        this.setState({quty:this.state.quty -1})
    }
    incrHandler=()=>{
       this.setState({quty:this.state.quty +1})
   }
    render() {
        return (
            <>
            <div class="container md-6">
               <div class="row">
                  <div class="col-mt-3">
                     <table className="table table-hover bg-light">
                         <thead>
                             <tr>
                                 <th>PRODUCT-NAME</th>
                                 <th>PRODUCT-IMAGE</th>
                                 <th>PRODUCT-PRICE</th>
                                 <th>PRODUCT-QUTY</th>
                                 <th>PRODUCT-TOTALPRICE</th>
                             </tr>
                         </thead>
                         <tbody>
                               <tr>
                               <td>{this.state.product_name}</td>
                               <td><img src={this.state.image} alt="realme 8i" hight="300px" /></td>
                               <td>{this.state.price}</td>
                               <td>
                                   
                            <button onClick={this.incrHandler}>+</button>
                            {this.state.quty}
                            <button onClick={this.decrHandler}>-</button>
                      </td>
                      <td>{this.state.price * this.state.quty}</td>
                               </tr>
                         </tbody>
                     </table>
                   </div>
                </div>
            </div>
                
            </>
        )
    }
}

export default Tablestate;

 
