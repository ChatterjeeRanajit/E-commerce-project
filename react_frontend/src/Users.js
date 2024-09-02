import React, { Component } from 'react'
import UserService from './UserService';
class Users extends React.Component{
    constructor(props){
        super(props)
        this.state={
          user:[]
        }
} 
 componentDidMount(){
    UserService.getUsers().then((response) => {
        this.setState({user: response.data})
    });

}
render (){
    {
        const mystyle = {
          color: "white",
          backgroundColor: "red",
          border:"2px solid black",
          borderRadius:"7px",
          padding: "10px",
          fontFamily: "Arial"
        }
        
    return (
        <div>
            <h1 className = "text-center"> Users </h1>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <td> User Name</td>
                        <td>Remove User</td>
                    </tr>

                </thead>
                <tbody>
                    {
                        this.state.user.map(
                            user => 
                            <tr key = {user.username}>
                                 <td> {user.username}</td>
                                 <td style={mystyle}> Remove User</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
           <a href='/' className="button home">Home</a>
        </div>

    )
}
}
}
export default Users;