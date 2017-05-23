'use strict';

// var promise = new Promise(function(resolve, reject){
//     console.log('MAIN PROGRAM')
// });

var promise = Promise.resolve("RESOLVED");
promise.then(console.log);

var promise = Promise.reject(new Error("ERROR!"));
promise.catch(console.log);
