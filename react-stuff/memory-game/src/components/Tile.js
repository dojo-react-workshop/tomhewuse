import React from 'react';

const Tile =(props)=>{

    return(
        <button className={"button secondary tile card small-6 col "+props.tileStyle.tileStyle} id={props.id}></button>
    )
};

export default Tile;