import React, { Component } from 'react';



export default class About extends Component {
  constructor(props){
    super(props);
  
  }

  render() {
      console.log("its work from login page");
    return (
      <div className="container">
            <img className="img-fluid rounded float-left" src="/media/logo.png"/>
            <div>
                <h2>Have a Nice Summer</h2>
                <p>It's quite pleasure to service you...</p>
            </div>
      </div>
    )
  }
}

