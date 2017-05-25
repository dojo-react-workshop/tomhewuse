/**
 * Created by Hew4803 on 5/24/17.
 */
var fs = require('fs');

const file=process.argv[2];

fs.readFile(file,'utf8',(err,data)=>{
    if(err){throw err}
    else{
        let arr = data.toString().split('\n');
        console.log(arr.length-1);
    }
})

