import React, { Component, forwardRef } from 'react'

 class Loging extends Component {
    render() {
        return ( <> 
<div class="container mt-12" >
    <div class="row-md-6">
        <div class="col-md-4"></div>
        <div className="col-md-4">
        <form>
                <div className="form-group">
                    <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please Enter User Name"
                  />
                </div>
                <div className="form-group">
                    <label>Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-success"
                  />
                </div>
        </form>
        </div>
    </div>
</div>
</>
)
    }
}

export default Loging
