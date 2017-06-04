import React, { Component } from 'react';


const TodoStatus = (props) =>{

    let completeTodos = 0;
    let activeTodos = 0;
    let options = ['All','Active','Completed'];
    let buttons=[];

    const handleClick=(e)=> {
        props.updateFilter(e.target.value)
    };

    for (let i = 0; i < options.length; i++) {
        console.log(props.filter);
        console.log(options[i])
        if(props.filter === options[i].toLowerCase()){
            buttons.push(
                <li>
                    <button key={i}
                            className='active'
                            value={options[i].toLowerCase()}
                            onClick={handleClick}
                            >{options[i]}
                    </button>
                </li>);
        }else{
            buttons.push(
                <li>
                    <button key={i}
                            value={options[i].toLowerCase()}
                            onClick={handleClick}
                            >{options[i]}
                    </button>
                </li>);
        }
    }

    props.todos.forEach((value)=>{
        if(value.isDone === false){
            activeTodos++;
        }else{
            completeTodos++;
        }
    });


    return(
        <div id="todoStatus" className="row centered">

                <ul className="col medium-8 medium-push-2 secondary button-group tiny even-3 columns">
                    {buttons}
                </ul>
                <p className="col medium-2 medium-pull-8 text-dark-grey columns">{activeTodos} Item(s) Remaining</p>
                <p className="col medium-2 text-dark-grey columns">{completeTodos} Item(s) Completed</p>
        </div>
    )
};

export default TodoStatus;