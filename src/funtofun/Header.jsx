 import React from 'react'
 import Footer from './Footer'
 function Header(props){
    var Name='Ravi'
    let age=55;
     return(
         <div>
             <Footer  x={Name} y={age}/>
             <hr/>
             <h1>how are your :{Name} ;{age}</h1>
         </div>
     
     )
 }
 export default Header;
  