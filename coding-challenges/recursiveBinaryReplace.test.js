
const recursiveBinaryReplace = require('./recursiveBinaryReplace')
const str = '1?0';
const str2= '110';

const result = ['110','100'];

if(recursiveBinaryReplace(str).length !== 2){
    throw Error('Should have 2 resutls in array')
}else{
    console.log('success')
}

if(recursiveBinaryReplace(str2).length!==1){
    throw Error('Should have 1')
}else{
    console.log('success')
}

