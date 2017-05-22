/**
 * Created by Hew4803 on 5/22/17.
 */
//Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function sumUp(x,y){
    let newArr=[];
    let start = 0;
    let end = 0;
    let sum = 0;
    if(x>y){
        start = y;
        end = x;
    }
    else{
        start=x;
        end=y;
    }
    for(let i=start; i<=end; i++){
        sum+=i;
    }
    return sum;
}
console.log(sumUp(2,5));

//Write a loop that will go through an array, find the minimum value, and then return it
//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
function arrayMin(arr){
    var min=arr[0];
    for(let i=0; i<arr.length; i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}
console.log(arrayMin([1, 5, 90, 25, -3, 0]));

//Write a loop that will go through an array, find the average of all of the values, and then return it
