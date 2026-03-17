// Search for a value – Check if a given value exists in the array (without using .includes())and with using .includes()


// Using .includes()
let arr = [1, 2, 3, 4, 5];
let valueToSearch = 3;
if(arr.includes(valueToSearch)){
    console.log(`${valueToSearch} exists in the array.`);
} else {
    console.log(`${valueToSearch} does not exist in the array.`);
}

// Without using .includes()

let array = [1, 2, 3, 4, 5];
let valueToFind = 6;
let found = false;
for(let i = 0; i < array.length; i++){
    if(array[i] === valueToFind){
        found = true;
        break;
    }
}
if(found){
    console.log(`${valueToFind} exists in the array.`);
} else {
    console.log(`${valueToFind} does not exist in the array.`);
}

