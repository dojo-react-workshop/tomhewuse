/**
 * Created by Hew4803 on 5/24/17.
 */
var fs = require('fs');
var path = require ('path');


const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir,null,(err,list)=>{

    list.forEach((val)=>{
        if(path.extname(val)==`.${ext}`){
            console.log(val);
        }
    })

});

