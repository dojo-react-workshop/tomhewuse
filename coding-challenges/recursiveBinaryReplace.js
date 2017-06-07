
module.exports=function stringPermutations(str, results=[]){
    const firstQuestion = str.indexOf('?');

    if(firstQuestion < 0){
        results.push(str);
        return results;
    }

    const firstSlice = str.slice(0,firstQuestion);
    const secondSlice = str.slice(firstQuestion + 1);

    stringPermutations(firstSlice+'1'+secondSlice,results);
    stringPermutations(firstSlice+'0'+secondSlice,results);

    return results;
};
