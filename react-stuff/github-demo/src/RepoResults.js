import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const RepoResults =(props)=>{


    const userList=props.users.map((value)=>{
        return (
            <div id="userRow" className="card tertiary" key={value.id} value={value.id}>
                <Link onClick={()=>props.updateRepos(value.login)} to={`/${value.login}/repos`}>{value.login}</Link>
                <img key={value.id/2} className="col avatar small-centered" src={value.avatar_url} />
            </div>
        )
    });

    return (
              <div id="repoResults" className="row">
                    <h2>Results</h2>
                    {userList}
                </div>

    )
}

export default RepoResults;