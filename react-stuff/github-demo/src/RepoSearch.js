import React, { Component } from 'react';

class RepoSearch extends Component{
    constructor(props){
        super(props);

        this.state={
            searchText:''
        }
    }

    handleChange=(event)=> {
        this.setState({
            searchText: event.target.value
        });
    };


    handleSubmit=(event)=>{
        event.preventDefault();

        this.props.updateUsers(this.state.searchText)
            .then(() => {
                this.setState({ searchText: '', error: null })

            })
            .catch(() => {
                this.setState({
                    error: 'Unrecognized username'
                })
            })

    };

    render(){
        return (
            <div id="repoSearch">
                <form className="row" onSubmit={this.handleSubmit}>
                    <input className="col small-18" type="text" placeholder="Enter username to search" onChange={this.handleChange} value={this.state.searchText}/>
                    <input type="submit" className="col small-6 button" value="Search" disabled={this.state.searchText === ''}/>
                </form>
            </div>
        )
    }
}
export default RepoSearch;