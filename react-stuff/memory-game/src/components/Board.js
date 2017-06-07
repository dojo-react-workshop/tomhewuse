import React,{ Component } from 'react';
import Tile from './Tile';

class Board extends Component{
    constructor(props){
    super();

    }

    getTileStyle(tile){
        let tileStyle = '';
        switch (this.props.gameStatus){
            case 'ready':
            case 'start':
            case 'pick':
                tileStyle='';
                break;
            case 'memorize':
                if(tile.simonPicked){
                    tileStyle='info'
                }else{
                    tileStyle='';
                }
                break;
            case 'finish':
                console.log('finish hit')
                if(tile.simonPicked){
                    tileStyle='info';
                    if(tile.playerPicked){
                        tileStyle='success';
                    }
                }else if(tile.playerPicked){
                    tileStyle='alert';
                }
                break;
            default:
                tileStyle='';
        }
        return {tileStyle: tileStyle};
    }

    generateTiles(){
        const tileGroup = this.props.tiles.map((tile) => {
            let tileStyle=this.getTileStyle(tile);
            return (
                <Tile key={tile.id} id={tile.id} tileStyle={tileStyle}/>
            )
        });
        return tileGroup;
    }

    render() {
        const tileGroup = this.generateTiles();
        return (
            <div id="board" className="row">
                {tileGroup}
            </div>
        );
    }
};

export default Board;