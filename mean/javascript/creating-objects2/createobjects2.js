/**
 * Created by Hew4803 on 5/22/17.
 */

function Vehicle(name, numOfWheels, numOfPassengers, speed){
    var self = this;
    var distance_traveled = 0;
    function updateDistanceTraveled(){
        console.log(self.speed);
        distance_traveled += self.speed;
        console.log(distance_traveled);
    }

    this.name = name;
    this.wheels = numOfWheels;
    this.passengers = numOfPassengers;
    this.speed = speed;
    this.makeNoise = function(){console.log("noise")};
    this.move = function(){
        updateDistanceTraveled();
        this.makeNoise();
    };
    this.checkMiles = function(){
        console.log(`Distance Traveled: ${distance_traveled}`);
    };



}

var bike = new Vehicle('bicycle', 2, 1, 13);
bike.makeNoise=function(){
    console.log("ring ring!");
}

var sedan = new Vehicle('car',4,4, 65);
sedan.makeNoise = function(){
    console.log("honk honk!");
}

var bus = new Vehicle('bus',6,72,55);
bus.pickupPassengers=function(number){
    bus.passengers += number;
};

console.log(bike);
console.log(sedan);
bus.pickupPassengers(8);
console.log(bus);
bike.move();
bike.move();
bike.checkMiles();
sedan.move()
sedan.checkMiles()
bus.move();
bus.checkMiles()


