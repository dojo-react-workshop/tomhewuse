import React, { Component } from 'react';
import './App.css';
import deleteImg from './img/x.png';

class App extends Component {

    state = {
        todos:[
            {
                id: Math.random()*10000,
                desc: "Test Todo",
                isDone: true
            },
            {
                id: Math.random()*10000,
                desc: "Test Todo",
                isDone: false
            },
            {
                id: Math.random()*10000,
                desc: "Test Todo",
                isDone: false
            }
        ]
    };

    addTodo=(text)=>{
        let newTodos = this.state.todos;
        let todoObj = {
                id: Math.random()*10000,
                desc: text,
                isDone: false
            };
        newTodos.push(todoObj);

        this.setState(newTodos);

    }

    deleteTodo=(todoID)=>{
        console.log(todoID);
        let newTodos = this.state.todos.filter((value)=>{
            if(value.id!==todoID){
                return value;
            }
        });
        this.setState({todos:newTodos});
    };

    updateTodoStatus=(todoID,status)=>{

        let newTodos = this.state.todos.map((value)=>{
            console.log(value);
            if(value.id==todoID){
                console.log(value.status);
                value.isDone = status;
            }
            return value;
        });
        this.setState({todos:newTodos});

    };

    handleKeyPress=(event)=>{
        console.log(event.key)
        if (event.key ==="Enter"){
            this.addTodo(event.target.value);
        }
    }

    render() {
        return (
          <div className="App">
              <h1>todos</h1>
              <input className="newTodo" type="text" onKeyPress={this.handleKeyPress} placeholder="What do you need to do?"/>
              <TodoList todos={this.state.todos} updateTodoStatus={this.updateTodoStatus} deleteTodo={this.deleteTodo}/>
              <ListStatus/>
          </div>
        );
  }
}

const NewTodo = (props) => {
    return(
        <div id='newTodo' >

        </div>
    )
};

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

            />)
    });
    return(
        <div id='todoList'>
            {listItems}
        </div>
    )
};

const TodoItem = (props) =>{
    let input;
    const handleStatusChange=()=>{
        props.updateTodoStatus(props.id,!props.isDone);
    };

    const handleDeleteClick=()=>{
        props.deleteTodo(props.id);
    }


    return(
        <div className='listItem'>
            <input type="checkbox" onChange={handleStatusChange} checked={props.isDone}/>
            <p>{props.desc}</p>
            <img className="deleteImg" onClick={handleDeleteClick} src={deleteImg} />
        </div>
    )
};

const ListStatus = (props) =>{
    return(
        <div id="listStatus">
            <p>items left</p>
            <button value="true">All</button>
            <button>Active</button>
            <button>Completed</button>
            <p>Items Completed</p>
        </div>
    )
}

export default App;
