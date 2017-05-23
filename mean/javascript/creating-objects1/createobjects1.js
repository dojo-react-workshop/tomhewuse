/**
 * Created by Hew4803 on 5/22/17.
 */

var vehicle = function(name, numOfWheels, numOfPassengers){
    return {
        name: name,
        wheels: numOfWheels,
        passengers: numOfPassengers,
        makeNoise: function(){}
        }
    }

var bike = vehicle('bicycle', 2, 1);
bike.makeNoise=function(){
    console.log("ring ring!");
}

var sedan = vehicle('car',4,4);
sedan.makeNoise = function(){
    console.log("honk honk!");
}

var bus = vehicle('bus',6,72);
bus.pickupPassengers=function(number){
    bus.passengers += number;
};

console.log(bike);
console.log(sedan);
bus.pickupPassengers(8);
console.log(bus);

