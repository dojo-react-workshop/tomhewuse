import React, { Component } from 'react';


const RepoList = (props)=>{

    const repos = props.repos.map((repo)=>{
        return (
            <p key={repo.id}><a href={repo.html_url} >{repo.name}</a></p>
        )
    });

    return (
        (props.repos.length > 0 ?
            <div id="repoResults" className="card">
                {repos}
            </div>
        : null)
    )

};

export default RepoList;