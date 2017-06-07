/**
 * Created by Hew4803 on 6/5/17.
 */
'use strict';

//below will not work with negative values
function isBalanced(arr){
    let lInd=0;
    let rInd=arr.length-1;
    let rSum=arr[rInd];
    let lSum=arr[lInd];

    while ((rInd - lInd) > 1 ){
        if(lSum > rSum){
            rInd--;
            rSum += arr[rInd];
        }
        else{
            lInd++;
            lSum+=arr[lInd];
        }
    }
    if(rSum === lSum){
        return true;
    }else {
        return false;
    }
}
console.log(isBalanced([1,2,3,4,10]));


//works with negatives
function balancePoint(array){
    let sum1 = array.reduce((accum,value)=>{
        return accum+=value;
    });

    let sum2=0;

    for(let i=0; i<array.length;i++){
        if(sum1===sum2){return true}
        let current = array[i];
        sum2+= current;
        sum1-=current;
    }
    return false;
}

console.log(balancePoint([1,2,3,4,10]));
console.log(balancePoint([20,-10,10]));
