
Array.prototype.map = function(callback){
    var newArr=[];

    this.forEach(function(value){newArr.push(callback(value));})
    return newArr;
};

var testArr = [1,2,3];
var testCB = function(value){return value*2};
console.log(testArr.map(testCB));
