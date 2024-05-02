
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Buddy');
dog.speak();

// here we created new dog object which called buddy then we call speak methnod on object so dog class object is calling speak method and it is overriding the parent class method. so it will not show the output of parent class method.
// the output will be buddy barks.
