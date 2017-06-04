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

    toggleEdit=(e)=> {
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
            todoElement=(
                <input
                    className="small-18 col heading-moderate"
                    autoFocus="true"
                    type="text"
                    onBlur={this.toggleEdit}
                    onKeyPress={this.handleSubmit}
                    onChange={this.handleEdit}
                    value={this.state.desc}
                />);
        }else{
            todoElement=(
                <p
                    className="small-18 col heading-moderate"
                    onDoubleClick={this.toggleEdit}>
                    {this.props.desc}
                </p>);
        }

        return (
            <div className='listItem row card'>
                <input
                    className="col"
                    type="checkbox"
                    onChange={this.handleStatusChange}
                    checked={this.props.isDone} />

                {todoElement}

                <p
                    className="deleteImg icon icon-remove col small-2 medium-2 large-2"
                    onClick={this.handleDeleteClick}
                    src={deleteImg}
                    alt="X"/>
            </div>
        )
    }
}

export default TodoItem;