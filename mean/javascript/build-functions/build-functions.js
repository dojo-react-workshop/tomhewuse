/**
 * Created by Hew4803 on 5/22/17.
 */

function runningLogger(){
    console.log(`I am running!`);
}

function mulitplyByTen(val){
    return val*10;
}
mulitplyByTen(5);

function stringReturnOne(){
    return "I am string one";
}

function stringReturnTwo(){
    return "I am string two";
}

function caller(callback){
    if(typeof callback === 'function'){
        callback();
    }
}

function myDoubleConsoleLog(callbackOne, callbackTwo){
    if(typeof callbackOne === 'function'){
        return callbackOne();
    }
    if(typeof callbackTwo === 'function'){
        return callbackTwo();
    }
}

var callback = ()=>console.log(`i'm a callback`);
function caller2(callback) {
    console.log(`Starting`);
    setTimeout(function () {
        if (typeof callback === 'function') {
            callback();
        }
    }, 2000);
    console.log(`ending`);
    return "interesting";
}
caller2(callback);


