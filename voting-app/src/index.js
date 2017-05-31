import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import TileGroup from './components/tilegroup'

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const tiles = [
            {
                language: 'React',

            },
            {
                language: 'Vue',

            },
            {
                language: 'Angular',

            },
            {
                language: 'Ember',

            }
        ];

        return (
            <div>
                <h1>Vote Your JS Library!</h1>
                <TileGroup tiles={tiles} />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
