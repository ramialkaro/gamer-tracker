import React from 'react';
import {HTTP} from './http';

export default class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state={users:[]};
    }
    
    componentDidMount(){
        HTTP.get("/api/users").then(users => this.setState({users}));
    }
    render(){
        console.log(this.state.users);
        let rows=this.state.users.map(u => <li key={u.id}>{u.firstName} {u.lastName} {u.password}</li>)
        return <div>
            <h2>Users in the DataBase</h2>
                <ul>
                    {rows}
                </ul>
        </div>
    }

}
