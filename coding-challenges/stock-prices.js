const priceArr = [10]; //, 9, 8,7,4,2];

function maxProfit(arr){
  if(arr.length<2){
    return 'need 2 pricese in the array';
  }else{
    let maxPro = arr[1] - arr[0];
    let buyPrice, currPro;

    for(let outter=0; outter<arr.length; outter++){
      buyPrice = arr[outter];

      for(let inner=outter+1; inner<arr.length; inner++){
        currPro = arr[inner]-buyPrice;
        if(currPro>maxPro){
          maxPro=currPro;
        }
      }
    }
    return maxPro;
  }
}

console.log(maxProfit(priceArr));