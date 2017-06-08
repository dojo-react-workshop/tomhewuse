/**
 * Created by Hew4803 on 6/8/17.
 */
'use strict';

function highProdofThree(arr){

    if(arr.length < 2){
        throw new Error('Must have at least 3 vals')
    }
    const [first,second] = arr;
    let highestProdOf2 = first*second;
    let lowestProdOf2 = first*second;
    let highest=Math.max(first,second);
    let lowest=Math.max(first,second);

    arr.reduce((highestProdOf3, val, index)=>{
        if(index < 2){
            return highestProductOf3;
        }

        highestProductOf3 = Math.max(
            highestProductOf3,
            highestProdOf2 * val,
            lowestProdOf2 * val);

        highestProdOf2 = Math.max(
            highestProdOf2,
            highest * val,
        );

        lowestProdOf2 = Math.min(
            lowestProdOf2,
            lowest*val
        );

        highest = Math.max(highest,val);
        lowest = Math.min(lowest,val);
        return highestProductOf3;
    }, first * second)
}

console.log(highProdofThree([-5,-4,-3,-2,-1]))