var times2 = function(x){
    console.log("times2 running..."+ x*2);
    return x*2;
};

var add2 = function(x){
    console.log("add2 running..."+ (x+2));
    return x+2;
};


var promise = new Promise((resolve,reject)=>{
    console.log('main code')
    var x = 5;
    resolve(x);

});
promise
    .then(times2)
    .then(add2);