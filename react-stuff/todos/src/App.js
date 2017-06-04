import React, { Component } from 'react';
import './App.css';
import deleteImg from './img/x.png';
import TodoList from './components/TodoList'
import TodoStatus from './components/TodoStatus'


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
        ],
        //options are "all", "active", "completed"
        filter:"all"
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

    updateTodoDesc=(todoID, todoDesc)=>{
        let newTodos = this.state.todos.map((value)=>{
            if(value.id===todoID){
                value.desc = todoDesc;
            }
            return value;
        });
        this.setState({todos:newTodos});

    };

    deleteTodo=(todoID)=>{
        let newTodos = this.state.todos.filter((value)=>{
            if(value.id!==todoID){
                return value;
            }
        });
        this.setState({todos:newTodos});
    };

    updateTodoStatus=(todoID,status)=>{

        let newTodos = this.state.todos.map((value)=>{
            if(value.id===todoID){
                value.isDone = status;
            }
            return value;
        });
        this.setState({todos:newTodos});

    };

    handleKeyPress=(event)=>{
        if (event.key ==="Enter"){
            this.addTodo(event.target.value);
        }
    };

    updateFilter=(filter)=>{
        this.setState({filter:filter});
    };


    render(){
        return (
          <div className="App">
              <h1>todos</h1>
              <input className="newTodo" type="text" onKeyPress={this.handleKeyPress} placeholder="What do you need to do?"/>
              <TodoList
                  todos={this.state.todos}
                  filter={this.state.filter}
                  updateTodoStatus={this.updateTodoStatus}
                  deleteTodo={this.deleteTodo}
                  updateTodoDesc={this.updateTodoDesc}
              />
              <TodoStatus
                  todos={this.state.todos}
                  filter={this.state.filter}
                  updateFilter={this.updateFilter}
              />
          </div>
        );
  }
}

export default App;
