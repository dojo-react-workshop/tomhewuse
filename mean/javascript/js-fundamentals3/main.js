function personConstructor(name){
   return {
        name: name,
        distance_traveled: 0,
        say_name: function () {
            console.log(this.name)
        },
        say_something: function (something) {
            console.log(`${this.name} says '${something}'.`)
        },
        walk: function () {
            alert(`${this.name} is walking`);
            this.distance_traveled += 3;
        },
        run: function () {
            alert(`${this.name} is running`);
            this.distance_traveled += 10;
        },
        crawl: function () {
            alert(`${this.name} is crawling`);
            this.distance_traveled += 1;
        },
    }
};
person = personConstructor("Tom");
person.say_name();
person.say_something('im cool');
person.walk();
person.run();
person.crawl();
console.log(person);

function ninjaConstructor (name,cohort){
    return {
        name: name,
        cohort: cohort,
        belt: 'yellow',
        levelUp: function(){
            if(this.belt==='yellow'){
                this.belt='brown';
            }else if(this.belt==='brown'){
                this.belt='black';
            }
        }
    }
}
ninja = ninjaConstructor("Raphael", "Ninja Turtles");
console.log(ninja);
ninja.levelUp();
console.log(ninja);