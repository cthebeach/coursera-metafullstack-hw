// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    doSomethingFun() {
        this.energy = this.energy - 10;
        console.log('Energy is decreasing, currently at:', this.energy)
    }
}
// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    doSomethingFun() {
        super.doSomethingFun();
    }
    goToWork() {
        this.xp += 10;
        console.log('Experience points is increasing, currently at:', this.xp)
       
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork()
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun()
    return manager; 
}
