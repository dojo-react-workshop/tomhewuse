import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Footer from './components/Footer';

class App extends Component {
    constructor() {
        super();

        this.state = {
            tiles: this.generateTileObjs(),
            //game status options 'ready','start','memorize','pick','finish'
            gameStatus: 'ready',
            timeLeft: 3
        };
    }

    generateSequence = (numInSequence=4,maxIndex)=> {
        let randomSequence = [];
        let randomIndex;
        let optionsArray = [];
        for (let i = 0; i <= maxIndex; i++) {
            optionsArray.push(i);
        }
        for (let i = 0; i < numInSequence; i++) {
            randomIndex = Math.floor(Math.random() * optionsArray.length);
            randomSequence.push(optionsArray[randomIndex]);
            optionsArray.splice(randomIndex, 1);
        }
        return randomSequence;
    }

    generateTileObjs(numOfTiles=12){
        let tileObjArray = [];
        for(let i=0; i<numOfTiles;i++){
            tileObjArray.push({
                id:i,
                simonPicked:false,
                playerPicked:false,
            })
        }
        let randomIndexes = this.generateSequence(4,11);
        tileObjArray.map((objVal, objInd)=>{
            let found = randomIndexes.find((randomVal)=>{
                return randomVal === objInd;
            });
            if(found){
                objVal.simonPicked=true;
            }
            return objVal;
        });
        return tileObjArray;
    }

    updateGameStatus = (status)=>{
        this.setState({gameStatus: status})
    };

    updatePlayerPicks=(tileIdArray)=>{

    };

    playGame=()=> {
        this.updateGameStatus('start');
        let countDown = setInterval(() => {
            if (this.state.timeLeft === 0){
                switch(this.state.gameStatus){
                    case 'started':
                        this.setState({
                            timeLeft:1});
                        this.updateGameStatus('memorize');
                        break;
                    case 'memorize':

                }
             }
             this.setState({timeLeft: this.state.timeLeft - 1})
            }, 1000);

        console.log('quick peak');

        let memorize = setTimeout(()=>{
            this.updateGameStatus('pick');
            this.setState({timeLeft: 3})
            },1000);

        let pick = setTimeout(()=>{
            this.updateGameStatus('finish');
            this.setState({timeLeft: 3})
        },1000);

    };

    render() {
        return (
            <div className="App">
                <h1>Memory Game</h1>
                <Board tiles={this.state.tiles} gameStatus={this.state.gameStatus}/>
                <Footer playGame={this.playGame} gameStatus={this.state.gameStatus} timeLeft={this.state.timeLeft} />
            </div>
        );
  }
}

export default App;
