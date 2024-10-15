// create your classes here

class Vehicle {
    color;
    engine;
    wheels;
    useHorn(){
        console.log("Beep, beep")
    }

}

class Motorcycle extends Vehicle {
    wheels = 2;
    useHorn(){
        super.useHorn()
        console.log("vroom, vroom")
    }
}

var ninja = new Motorcycle();
ninja.useHorn();
console.log(ninja.wheels)
