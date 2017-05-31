import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import CounterList from './components/counterList'

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Counters</h1>
                <CounterList/>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
