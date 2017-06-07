import React, { Component } from 'react';
import RepoSearch from './RepoSearch';
import RepoResults from './RepoResults';
import RepoList from './RepoList';
import { getSearchResults, getReposForUser } from './apiHelper'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            users: [],
            repos:[],
            showResults: false,
        }
    }

    updateRepos=(userName)=>{
        console.log(userName)
        getReposForUser(userName)
            .then((repos) => {
                console.log(repos)
                this.setState({repos: repos})
        });
    };

    updateUsers = (userName)=>{
        return getSearchResults(userName)
            .then((data)=>{
                this.setState({
                    users: data,
                    repos:[],
                    showResults: true
                });
            })
    };

    render() {
        return (
            <Router>
              <div className="App">
                  <h1>Github Demo</h1>
                  <RepoSearch updateUsers={this.updateUsers} updateRepos={this.updateRepos}/>
                  {((this.state.showResults) ? <RepoResults users={this.state.users} updateRepos={this.updateRepos}/> : null)}
                  <Route path='/:user/repos' render={(props)=> {
                      console.dir(props)
                      if(this.state.users < 1){
                          return <Redirect to="/" />
                      }else{
                          return <RepoList repos={this.state.repos} />
                      }
                      }}/>
              </div>
            </Router>
        );
  }
}

export default App;
