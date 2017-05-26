/**
 * Created by Hew4803 on 5/26/17.
 */

function getProducts(arr){
    const forwardProd=[];
    let rollingProd = 1;

    for(let i=0; i<arr.length; i++){
        forwardProd[i]=rollingProd;
        rollingProd*=arr[i];
    }

    const backwardProd=[];
    rollingProd = 1;
    for(let i=arr.length-1; i>=0; i--){
        backwardProd[i]=rollingProd;
        rollingProd*=arr[i];
    }

    const finalProds = [];
    for(let i = 0; i<arr.length; i++){
        finalProds[i] = backwardProd[i] * forwardProd[i];
    }
    return finalProds;
}

console.log(getProducts([3,2,5,2]));

