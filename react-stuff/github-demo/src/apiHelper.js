import http from 'axios';

export const getSearchResults=(userName)=> {
    return http.get(`https://api.github.com/search/users?q=${userName}`)
        .then((res) => {
            return res.data.items;
        })
        .catch((err)=>{
            console.log(`Error: ${err.message}`)
        })
}

export const getReposForUser=(userName)=>{
    return http.get(`https://api.github.com/users/${userName}/repos`)
        .then((res) => {
            console.log(`in axios:${res}`);
            return res.data;
        })
        .catch((err)=>{
            console.log(`Error: ${err.message}`)
        })
}


