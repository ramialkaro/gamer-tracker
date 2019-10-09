import React, { Component } from 'react';

export default class CardGame extends Component {
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="card mb-3 shadow" style={{"maxWidth":"770px"}}>
                  <div className="row no-gutters" >
                    <div className="col-md-4 inner">
                        <a href="/game"><img src={this.props.imgSrc} className="card-img" alt="..."/></a>
                    </div>        
                    <div className="col-md-4">
                        <div className="card-body">
                        <a href="/game" style={{'textDecoration':'none'}}><h5 className="card-title">{this.props.gameName} {this.props.newGame}</h5></a>
                            <p className="card-text">New football video game come in 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
