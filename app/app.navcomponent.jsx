import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../app/pages/app.home';
import Game from "../app/pages/app.game";
import Login from './pages/app.login';
import ChartComponent from './pages/app.chart';
import About from './pages/app.about';

export default class NavComponentContainer extends Component{
    constructor(props){
        super(props)
    }
    render(){
          console.log("the nav component start to work...");
 
        return (
            <div>

               
                
            <Router>
                <div className="container-fluid">
                             
                        <ul className="nav nav-pills nav-justified mt-2 bg-white shadow-sm p-3 mb-5 rounded">
                            <li className="nav-brand"> <a href="/"><img style={{'width':'75px', 'paddingRight':'23px'}} src="/media/logo.png"/></a></li>

                            <li className="nav-item "><Link to="/" className="nav-link active">Home</Link></li>
                            
                            <li className="nav-item"><Link to="/game" className="nav-link">Game</Link></li>

                            <li className="nav-item"><Link to="/chart" className="nav-link">Gaming Chart</Link></li>

                            <li className="nav-item"><Link to="/login" className="nav-link"><i className="fas fa-sign-in-alt"></i></Link></li>

                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>

                        </ul>

                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/game" component={Game}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/chart" component={ChartComponent}/>
                            <Route path="/about" component={About}></Route>
                        </Switch>

               </div>
            </Router> 
                             
            </div>

        );
    }
}