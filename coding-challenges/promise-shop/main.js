

var getAll = function(prom1, prom2){
    return new Promise((resolve,reject)=>{
    var counter = 0;
    var doneVals = []

    prom1.then((val)=>{
        doneVals.push(val);
        counter++;

        if (counter>=2) {
            resolve(doneVals);
        }
    });

    prom2.then((val)=>{
        doneVals.push(val);
        counter++});

        if(counter>=2){
            resolve(doneVals);
        }
    });
};

getAll(promiseOne(), promiseTwo()).then((values)=>{
    console.log(values[0], values[1]);
});
