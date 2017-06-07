import React, { Component } from 'react';
import Form from './containers/Form'
import './App.css';

class App extends Component {
    constructor(){
        super();
    }

    render() {
        return (
          <div className="App">
              <h1>Validated Form</h1>
              <Form />
          </div>
        );
    }
}

export default App;
