import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './main.css'
import TileGroup from './components/tilegroup'

class App extends React.Component{
    constructor(props){
        super();
        this.state= {
            tiles: [
                {
                    id: Math.round(Math.random()*1000),
                    language: 'React',
                    votes: 0
                },
                {
                    id: Math.round(Math.random()*1000),
                    language: 'Vue',
                    votes: 0
                },
                {
                    id: Math.round(Math.random()*1000),
                    language: 'Angular',
                    votes: 0
                },
                {
                    id: Math.round(Math.random()*1000),
                    language: 'Ember',
                    votes: 0
                }
            ]
        }
    }

    render(){
        return (
            <div>
                <h1>Vote Your JS Library!</h1>
                <TileGroup tiles={this.state.tiles} updateTile={this.updateTile}/>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
