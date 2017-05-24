var fs = require("fs");
const myMathService = require('./math')

fs.readFile('node.txt','utf8', (err,data) => {
    console.log(data.toUpperCase());
});

console.log('Do other work');



console.log(myMathService.sumUp(2,3)) // 5
console.log(myMathService.product(2,3)) // 6
console.log(myMathService.square(2)) // 4
console.log(myMathService.randomNum(2, 9)) // 7
