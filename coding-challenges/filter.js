

Array.prototype.filter = function(callback){
    var newArr=[];

    this.forEach(function(value){
        if(callback(value)){
            newArr.push(value);
        }
    });
    return newArr;
};

var testArr = [1,2,3];
var testFilterCB = function(value){return (value%2===0)};


console.log(testArr.filter(testFilterCB));