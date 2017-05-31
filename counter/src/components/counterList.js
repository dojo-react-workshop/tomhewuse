import React from 'react';
import Counter from './counter';

class CounterList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            counters: 1
        }

    }

    listOfCounters = ()=>{
        let counters=[];
        for(let i=0;i<this.state.counters;i++){
            counters.push(<Counter key={i}/>)
        }
        return counters;
    };

    addCounter =()=>{
        this.setState({counters: this.state.counters+1})
    };

    render(){
        return (
            <div>
                <button onClick={this.addCounter}>Add Counter</button>
                {this.listOfCounters()}
            </div>
        )
    }

}

export default CounterList;
