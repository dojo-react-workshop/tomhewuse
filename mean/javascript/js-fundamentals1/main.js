/**
 * Created by Hew4803 on 5/22/17.
 */

//Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
x.forEach((value)=>{console.log(value)});
console.log(x);

//Add a new value (100) in the array x using a push method.
x.push(100);
console.log(x);

//Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
x.push(["hello","world", "JavaScript is Fun"]);
console.log(x);

//Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
var sum=0;
for(let i=1; i<=500; i++){
    sum+=i;
}
console.log(`Sum: ${sum}`);

//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
var arrMin = [1, 5, 90, 25, -3, 0];
var min=arrMin[0];

for(let i=0; i<arrMin.length; i++){
    if(min>arrMin[i]){
        min=arrMin[i];
    }
}
console.log(`Min: ${min}`);

//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
var arrAvg = [1, 5, 90, 25, -3, 0];
var sum;
for (let i=0;i<arrAvg.length;i++){
    sum+=arrAvg[i]
}
console.log(`Average: ${sum/arrAvg.length}`)

//for in loop through object
var newNinja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript', //like that's even a question!
    dojo: 'Dallas'
}


for(key in newNinja){
    console.log(`${key} is ${newNinja[key]}`);
}
