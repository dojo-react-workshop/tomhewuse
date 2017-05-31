/**
 * Created by Hew4803 on 5/31/17.
 */

import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count: 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }
    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render(){
        return (
            <div className="counter">
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
export default Counter;
