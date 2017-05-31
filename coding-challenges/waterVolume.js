/**
 * Created by Hew4803 on 5/31/17.
 */
'use strict';
function findMaxIndex(arr){
    let maxVal = arr[0];
    let maxIndex=0;
    arr.forEach((value, index) => {
        if(maxVal<value){
            maxIndex=index;
            maxVal=value;
        }
    })
    return maxIndex;
}

function waterVolume(arr){
    let maxIndex = findMaxIndex(arr);
    let left = arr[0];
    let right = arr[arr.length-1];
    let volume = 0;
    for(let i=1; i<maxIndex;i++){
        if(left > arr[i]){
            volume += left - arr[i];
        }else{
            left = arr[i];
        }
    }

    for(let i=arr.length-2; i>maxIndex;i--) {
        if (right > arr[i]) {
            volume += right - arr[i];
        } else {
            right = arr[i];
        }
    }
    return volume;
}

console.log(waterVolume([1,3,5,4,1,6,3,4]));

