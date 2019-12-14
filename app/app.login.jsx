import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/app.home';

export default class LogIn extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            isCorrectUser:false,
            isCorrectPass:false,
            isShow:false
          }   
    }

    render(){

        
    const validationUsername =(ev)=>{
        //console.log(ev.target.value);
        if(ev.target.value==="developer"){
            this.setState({username:ev.target.value, isCorrectUser:true})
            console.log('user correct');
            
        }
    }

    const validationPassword = (ev)=>{
        //console.log(ev.target.value);
        if(ev.target.value==="123"){
            this.setState({password:ev.target.value, isCorrectPass:true})
            console.log('password correct');
            
        }
    }

    const LogHanlder = ()=>{
        if(this.state.isCorrectUser && this.state.isCorrectPass){
            this.setState({isShow:true})
            console.log("You have been log in");
            <div>
                <Switch>
                 <Route path="/login/welcome" component={Home} />
             </Switch>
            </div>
        }
    }
    if(this.state.isShow){
        console.log('its come from the hidden');
        if(window.confirm("Do you enjoy with this ? ")){
            console.log("You pressed OK");
            
        }
        else{
            console.log("You pressed Cancel");
        }
    }
        return(
            <div className="container w-50 pt-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="userNameInput">User Name</label>
                        <input type="text" className="form-control" id="userNameInput" placeholder="user name" onChange={validationUsername}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="password" onChange={validationPassword}/>
                    </div>
                    <button type="button" className="btn btn-success" onClick={LogHanlder}>Log In</button>
                   

                </form>


                <p id="post-continer-part">This part was hidden... its appear after you login </p>
            </div>
        );
    }
}
