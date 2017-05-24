'use strict';


function parsePromised(){
    var promise = new Promise((resolve,reject)=>{
        resolve(JSON.parse('tost'));
    });
    promise
        .then((text)=>{console.log(`Made it - ${text}`)})
        .catch((err)=>{console.log(`SyntaxError: Unexpected token o in JSON at position 1
    at Object.parse (native)
    at /usr/local/lib/node_modules/promise-it-wont-hurt/exercises/throw_an_error/solution/solution.js:6:20
    at parsePromised (/usr/local/lib/node_modules/promise-it-wont-hurt/exercises/throw_an_error/solution/solution.js:4:10)
    at Object.<anonymous> (/usr/local/lib/node_modules/promise-it-wont-hurt/exercises/throw_an_error/solution/solution.js:13:1)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)`)
    })
};

parsePromised();


