import React, {Component } from 'react';
import {Line, Bar} from 'react-chartjs-2';
import { HTTP} from '../http';

export default class Chart extends Component{
    constructor(props){
        super(props);
        this.state={games:[],game:{id:0,gameName:"",consoleType:"",image:"",price:""}};
    }
   

    componentDidMount(){
        HTTP.get("/api/game").then(games => this.setState({games}));
    }
    render(){
        console.log(this.state.games);
        let km=24;

        

        const myNewColor=()=>{
            let arr= [] ;
            for(let i=0; i < 7 ; i++){
                arr[i]=Math.floor(Math.random()*km);
                console.log(arr[i]);
            };

            return arr;
        }


        let data={
            labels:[
                'Monday',
                'Thursday',
                'Wednesday',
                'Tuesday',
                'Friday',
                'Saturday',
                'Sunday' 
            ],
            datasets: [
                {
                  label: 'God Of War',
                  data: myNewColor(),
                  fill: false,          // Don't fill area under the line
                  borderColor: ['orange'],  // Line color,
                  borderWidth: 1
                },
                {
                    label: 'FIFA 2020',
                    data: myNewColor(),
                    fill: false,          // Don't fill area under the line
                    borderColor: ['green'],  // Line color,
                    borderWidth: 1
                  },
                  {
                    label: 'NBA20',
                    data: myNewColor(),
                    fill: false,          // Don't fill area under the line
                    borderColor: ['black'],  // Line color,
                    borderWidth: 1
                  },
                  {
                    label: 'MineCraft',
                    data: myNewColor(),
                    fill: false,          // Don't fill area under the line
                    borderColor: ['red'],  // Line color,
                    borderWidth: 1
                  },
                  {
                    label: 'Red Dead Redemption 2',
                    data: myNewColor(),
                    fill: false,          // Don't fill area under the line
                    borderColor: ['yellow'],  // Line color,
                    borderWidth: 1
                  },
                  {
                    label: 'Spore',
                    data: myNewColor(),
                    fill: false,          // Don't fill area under the line
                    borderColor: ['pink'],  // Line color,
                    borderWidth: 1
                  },
                  {
                    label: 'PUBG',
                    data: myNewColor(),
                    fill: false,          // Don't fill area under the line
                    borderColor: ['purple'],  // Line color,
                    borderWidth: 1
                  } 
              ]
        }

        return(
            <div>
                <article className="canvas-container">
                    <div className="container mb-3 text-center">
                        <button className="btn btn-info mr-3" >Day</button>
                        <button className="btn btn-danger mr-3" >Week</button>
                        <button className="btn btn-warning mr-3" >Month</button>
                        <button className="btn btn-dark mr-3" >Season</button>
                        <button className="btn btn-success mr-3" >Year</button>
                    </div>
                    <Line data={data}/>
                    <hr/>
                    {/* <Bar data={data}/> */}
                </article>       
            </div>
        );
    }
}
