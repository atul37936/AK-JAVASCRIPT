const car = {
    make: 'supra',
    year: 2020,
    Car: function() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
};
console.log(car.Car()); 
