import React, { Component } from 'react'
import CardGame from '../app.card';
import Game from '../pages/app.game'
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';

export default class Home extends Component {


  render() {

    return (
      <div className="container">
        <CardGame gameName="FIFA 20" newGame={<span className="text-primary">New</span>} imgSrc="/media/fifa20.jpg"/>
        <CardGame gameName="NBA 2020" newGame={<span className="text-danger">UpComing</span>} imgSrc="/media/nba2020.jpg"/>
        <CardGame gameName="Spore" imgSrc="/media/sopre.jpg"/>
        <CardGame gameName="MineCraft" newGame={<span className="text-warning">In Market</span>} imgSrc="/media/minecraft.jpg"/>
        <CardGame gameName="Red Dead Redemption 2 " imgSrc="/media/RedDeadRedemption.jpg"/>
        <CardGame gameName="PUBG" imgSrc="/media/pubg.jpg"/>
      </div>
    )
  }
}


