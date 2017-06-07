

function max_price(arr=process.argv[2]) {

    if (arr.length < 2) {return console.log("Array not long enough")};

    var profit = arr[1] -arr[0];

    var buy = arr[0];

    for (let i=1; i<arr.length-1; i++) {
        if (buy > arr[i]) { buy = arr[i];};
        if (profit < (arr[i+1] - buy)) {profit = (arr[i+1]-buy)};
    };

    console.log(profit);
    return profit;
}

max_price([4,11,3,3,4,12,4]);

