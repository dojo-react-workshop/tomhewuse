'use strict';

var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject(new Error('REJECTED!'));
    },300);
});

function onReject(err){
    console.log(err.message);
}


promise.then((text)=>{console.log(text)}, (err)=>{onReject(err)});


