/**
 * Created by Hew4803 on 5/24/17.
 */
var fs = require('fs');
var path = require('path');

module.exports=function extensions(dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        let newArr=[];
        if(err){
            return callback(err)
        }

        list.forEach((val) => {
            if (path.extname(val) == `.${ext}`) {
                newArr.push(val)
            }
        });
        callback(null,newArr);
    });
};
