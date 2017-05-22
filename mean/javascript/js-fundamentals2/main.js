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
function arrayAvg(arr){
    var sum=0;
    arr.forEach((value)=>sum+=value);
    return sum/arr.length;
}
var testArr = [1, 2, 3, 4];
console.log(arrayAvg(testArr));


//Rewrite these 3 as anonymous functions assigned to variables.
var sumVar = function(x,y){
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

var minVar = function(arr){
    var min=arr[0];
    for(let i=0; i<arr.length; i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}

var avgVar = function (arr){
    var sum=0;
    arr.forEach((value)=>sum+=value);
    return sum/arr.length;
}


//Rewrite these as methods of an object
var objectFuncs = {
    sumUp: function(x,y){
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
    },
    getmin: function(x,y){
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
    },
    getAvg: function (arr){
        var sum=0;
        arr.forEach((value)=>sum+=value);
        return sum/arr.length;
    }
}

var person = {
    name: 'Tom',
    distance_traveled: 0,
    say_name: function(){console.log(this.name)},
    say_something: function(something){console.log(`${this.name} says '${something}'.`)},
    walk: function(){
        alert(`${this.name} is walking`);
        this.distance_traveled+=3;
    },
    run: function(){
        alert(`${this.name} is running`);
        this.distance_traveled+=10;
    },
    crawl: function(){
        alert(`${this.name} is crawling`);
        this.distance_traveled+=1;
    },

};

person.say_name();
person.say_something('im cool');
person.walk();
person.run();
person.crawl();
console.log(person.distance_traveled);
