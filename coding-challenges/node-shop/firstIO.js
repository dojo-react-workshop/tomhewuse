var fs = require('fs');

const file=process.argv[2];

const data = fs.readFileSync(file).toString();

const arr = data.split('\n');
console.log(arr.length-1);

