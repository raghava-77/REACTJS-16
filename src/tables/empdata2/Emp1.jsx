import React from 'react'
import Data from '../Data';
class Emp1 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            emp: Data,
        }
}
    render(){
        return(
        <>
<div className="container mt-4">
    <div className="row">
        <div className="col-md-8">
            <table className="table table-hover">
                <thead>
                <tr>
                   <th>id</th>
                   <th>name</th>
                   <th>email</th>
                   <th>gender</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.emp.map((emp)=>{
                        return(
                        <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.gender}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
</div>


        </>)
    }
}
export default Emp1;