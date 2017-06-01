/**
 * Created by Hew4803 on 5/31/17.
 */
import React from 'react';
import Tile from './tile'

class TileGroup extends React.Component {
    constructor(props) {
        super(props);
        const containerStyle =
            {
                margin: 'auto',
                width: 475
            };
    }

    render() {
        const containerStyle =
            {
                margin: 'auto',
                width: 475
            };

        const tiles = this.props.tiles.map((tileObj, idx) => {
            return <Tile key={tileObj.id} language={tileObj.language} votes={tileObj.votes} updateTile={this.props.updateTile} />;
        });

        return (
            <div style={containerStyle}>
                {tiles}
            </div>
        );

    }
}

export default TileGroup;