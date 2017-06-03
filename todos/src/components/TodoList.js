import React, { Component } from 'react';
import TodoItem from './TodoItem'

const TodoList = (props) => {

    let filteredTodos = props.todos.filter((value) => {
        if(props.filter === 'all'){
            return true;
        }else if ((value.isDone === true && (props.filter == 'completed')) || (value.isDone === false && (props.filter === 'active'))){
            return true;
        } else {
            return false
        }
    });

    const listItems = filteredTodos.map((item)=>{
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
