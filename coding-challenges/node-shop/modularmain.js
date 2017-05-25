var readExt = require('./modular.js');

readExt(process.argv[2],process.argv[3],(err,arr)=> {
    if (err) {
        console.log('error occurred')
    }

    arr.forEach((val) => {
        console.log(val)
    })
});
