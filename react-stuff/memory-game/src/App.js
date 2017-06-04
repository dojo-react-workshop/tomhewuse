import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Footer from './components/Footer'

class App extends Component {
  render() {

    return (
        <div className="App">
            <h1>Memory Game</h1>
            <Board></Board>
            <Footer></Footer>
        </div>
    );
  }
}

export default App;
