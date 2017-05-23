
const array = [1,2,3,4];


Array.prototype.reduce = function(callback,startVal){
    var accum = this[0];
    var start = 1;
    if(startVal !== undefined){
        accum=startVal;
        start=0;
    }
    console.log(`startVal: ${startVal}`);
    console.log(`Accum: ${accum}`);
    console.log(`start: ${start}`);
    for(let i = start;i<this.length;i++){
        accum=callback(accum,this[i]);
    }
    return accum;
};

const sum = array.reduce((currentSum,currentValue) => {
    return currentSum+=currentValue;
},100);

console.log(sum);