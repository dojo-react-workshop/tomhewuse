import React from 'react';
import Tile from './Tile';

const Board=(props)=>{
    console.log(props.tiles);
    const tileGroup = props.tiles.map((value)=>{
        return (
            <Tile key={value} id={value}/>
        )
    });
    console.log(tileGroup);

    return(
        <div id="board">
            {tileGroup}
        </div>
    );
};

export default Board;