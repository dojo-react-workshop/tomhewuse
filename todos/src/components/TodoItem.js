import React, { Component } from 'react';
import deleteImg from './../img/x.png';

class TodoItem extends Component{
    constructor(props){
        super();
        this.state={
            editable:false,
            desc:props.desc
        }
    }

    handleStatusChange=()=>{
        this.props.updateTodoStatus(this.props.id,!this.props.isDone);
    };

    handleDeleteClick=()=>{
        this.props.deleteTodo(this.props.id);
    };

    toggleEdit=()=> {
        this.setState({
            editable: !this.state.editable
        })

    };
    handleEdit=(e)=>{
        this.setState({
            desc: e.target.value
        })
    };

    handleSubmit=(event)=>{
        if(event.key === 'Enter'){
            this.props.updateTodoDesc(this.props.id, event.target.value);
            this.toggleEdit();
        }

    };


    render(){
        let todoElement;
        if(this.state.editable){
            todoElement=(<input type="text" onBlur={this.toggleEdit} onKeyPress={this.handleSubmit} onChange={this.handleEdit} value={this.state.desc} />);
        }else{
            todoElement=(<p onDoubleClick={this.toggleEdit}>{this.props.desc}</p>);
        }

        return (
            <div className='listItem'>
                <input type="checkbox" onChange={this.handleStatusChange} checked={this.props.isDone} />
                {todoElement}
                <img className="deleteImg" onClick={this.handleDeleteClick} src={deleteImg} alt="X"/>
            </div>
        )
    }
}

export default TodoItem;