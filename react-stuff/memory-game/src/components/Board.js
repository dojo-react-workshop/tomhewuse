'use strict';
import React, { Component } from 'react';
import Tile from './Tile';

class Board extends Component{

    render(){
        return (
            <div id="Board">
                <div className="row">
                    <Tile>X</Tile>
                    <Tile>X</Tile>
                    <Tile>X</Tile>
                    <Tile>X</Tile>
                </div>
                <div className="row">
                    <Tile>X</Tile>
                    <Tile>X</Tile>
                    <Tile>X</Tile>
                    <Tile>X</Tile>
                </div>
                <div className="row">
                    <Tile>X</Tile>
                    <Tile>X</Tile>
                    <Tile>X</Tile>
                    <Tile>X</Tile>
                </div>
            </div>
        )
    }
}

export default Board;