
const values = [{}]

function cityBuilder(arr){
    const results = {};
    for (let i = 0; i< arr.length; i++){
        let city = arr[i].city;
        results[city]=true;

    }
    return Object.keys(results);
}

function cityBuilder2(arr){
    const results = arr.reduce((accum,personObj)=>{
        let city = personalObj.city;
        accum[city]=true;
        return accum;
    },{});
    return Object.keys(results);
}