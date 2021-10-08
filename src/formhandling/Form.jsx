import React, { Component } from 'react'
export class Form extends Component {
        state={
            username:"",mobileNumber:"",pincode:"",Localit:"",Address:"",Distict:"",City:"",
            Landmark:"",AddressType:"",
        }
    updateform=(event)=>{
        this.setState({
            ...this.state,[event.target.name]:event.target.value
        })
    }
    saveHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
      };
    render() {
        return (
            <>
            <pre>{JSON.stringify(this.state)}</pre>
            <hr />
               <form>
                   <div>
                       <label>name</label>
                       <input type="text" name="username" placeholder="Name" onChange={this.updateform} />
                       &nbsp;&nbsp;
                         <label>MobileNumber</label>
                       <input type="text" name="mobileNumber" placeholder="10-digit mobile numberName" onChange={this.updateform}/>
                   </div><br/>
            <div>
                <label>Pincode</label>
                <input type="text" name="pincode" placeholder="Pincode" onChange={this.updateform}/>
                &nbsp;&nbsp;
                <label>Locality</label>
                <input type="text" name="Localit" placeholder="Locality" onChange={this.updateform}/>
            </div><br/>
            <div>
                <label></label>
                <textarea  cols="50" rows="8" name="Address" placeholder="Address(Area and street)"onChange={this.updateform} ></textarea>
            </div><br/>
            <div>
                 <input type="text" name="Distict" placeholder="/Distict/town" onChange={this.updateform} />
                 &nbsp;&nbsp; 
                <label>City</label>
                <select type="text" name="City" onChange={this.updateform}>
                    <option>..Select State..</option>
                    <option>  chennai</option>
                    <option> bangalore</option>
                    <option> kochi</option>
                </select> 
                     </div><br/>
                     <div>
                <label></label>
                <input type="text" name="Landmark" placeholder="Landmark(optional)" onChange={this.updateform}/>
                &nbsp;&nbsp;
                <label></label>
                <input type="text" name="Phone"placeholder="Altemate Phone(optional)" onChange={this.updateform}/>
            </div> <br/>
            <div>
            <label onChange={this.updateform}>Address Type</label><br/>
        
            <input type="radio" id="home" name="Address Type"/><label for="home">home</label>
            &nbsp;
            <input type="radio" id="wor" name="Address Type"/><label for="wor">work</label>
            
            </div>
            <button type="save" className="btn btn-success">SAVE</button>
            &nbsp;
            <button type="save" className="btn btn-danger">CANCEL</button>
            
  
               </form>
            </>
        )
    }
}

export default Form
