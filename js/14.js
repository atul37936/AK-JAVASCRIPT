function tok(obj, prop) {
    return obj[prop];
}
const car = {
    make: 'Toyota',
    year: 2021
};
console.log(tok(car, 'make'));  
console.log(tok(car, 'year'));  
