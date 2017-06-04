import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Footer from './components/Footer'

class App extends Component {
    constructor() {
        super();

        this.state = {
            tiles: [1,2,3,4,5,6,7,8,9,10,11,12],
            sequence: [],
            playerGuess:[],
        };
    }

    generateSequence(numInSequence){
        let randomSequence = [];
        let optionsAvailable = this.state.tiles.slice();
        let randomIndex;
        for(let i=0;i<numInSequence;i++){
            randomIndex = Math.floor(Math.random()*optionsAvailable.length);
            randomSequence.push(optionsAvailable[randomIndex]);
            optionsAvailable.splice(randomIndex,1);
        }
        return randomSequence;
    }

    render() {
        this.generateSequence(4);
        return (
            <div className="App">
                <h1>Memory Game</h1>
                <Board tiles={this.state.tiles}/>
                <Footer/>
            </div>
        );
  }
}

export default App;
