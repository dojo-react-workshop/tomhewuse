import React, { Component } from 'react';


const TodoStatus = (props) =>{
    return(
        <div id="todoStatus">
            <p>items left</p>
            <button value="true">All</button>
            <button>Active</button>
            <button>Completed</button>
            <p>Items Completed</p>
        </div>
    )
}

export default TodoStatus;