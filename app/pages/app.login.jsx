import React, { Component } from 'react';
import LogIn from '../app.login';



export default class Login extends Component {
  constructor(props){
    super(props);
  
  }

  render() {
      console.log("its work from login page");
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="/login">Log In</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/signup">Sign Up</a>
          </li>
        </ul>
        <LogIn></LogIn>
      </div>
    )
  }
}

