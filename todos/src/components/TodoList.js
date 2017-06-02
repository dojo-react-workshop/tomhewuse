import React, { Component } from 'react';
import TodoItem from './TodoItem'

const TodoList = (props) => {

    const listItems = props.todos.map((item)=>{
        return (
            <TodoItem
                key={item.id}
                id={item.id}
                desc={item.desc}
                isDone={item.isDone}
                updateTodoStatus={props.updateTodoStatus}
                deleteTodo={props.deleteTodo}
                updateTodoDesc={props.updateTodoDesc}
            />)
    });
    return(
        <div id='todoList'>
            {listItems}
        </div>
    )
};

export default TodoList;
