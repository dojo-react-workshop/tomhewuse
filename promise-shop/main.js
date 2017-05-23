'use strict';

var promise = new Promise(function(resolve, reject){
    resolve('PROMISE VALUE');
    console.log('MAIN PROGRAM');
    // setTimeout(function(){
    //     reject(new Error('REJECTED!'));
    // },300);
});

function onReject(err){
    console.log(err.message);
}

promise.then(console.log, (err)=>{onReject(err)});


