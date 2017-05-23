/**
 * Created by Hew4803 on 5/22/17.
 */

function Vehicle(name, numOfWheels, numOfPassengers, speed){
    var self = this;
    function updateDistanceTraveled(){
        console.log(self.speed);
        self.distance_traveled += self.speed;
        console.log(self.distance_traveled);
    }

    this.name = name;
    this.wheels = numOfWheels;
    this.passengers = numOfPassengers;
    this.speed = speed;
    this.distance_traveled = 0;
    this.VIN=this.setVIN();
    this.move = function(){
        updateDistanceTraveled();
        this.makeNoise();
    };
}
Vehicle.prototype.makeNoise=function(){console.log("noise");};
Vehicle.prototype.checkMiles=function(){console.log(`Distance Traveled: ${this.distance_traveled}`);};
Vehicle.prototype.setVIN = function(){return Math.floor(Math.random()*1000000000)};
Vehicle.prototype.accelerate = function(val=1){this.speed+=val};

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

console.log(bike.VIN)
console.log(bike);
console.log(sedan);
bus.pickupPassengers(8);
bus.accelerate();
console.log(bus);
bike.move();
bike.move();
bike.checkMiles();
sedan.move()
sedan.checkMiles()
bus.move();
bus.checkMiles()


