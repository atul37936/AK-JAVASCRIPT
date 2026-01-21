//Multiple of 3 or 7. 

let num = process.argv[2]
let result = (num % 3 === 0 && num % 7 === 0) ? `${num} is multiple of 3 and 7`: `${num} is not multiple of 3 and 7`;
console.log(result);


// if(num % 3 === 0 || num % 7 === 0){
//   console.log(`${num} is multiple of 3 or 7`)
// }else{
//   console.log(`${num} is not multiple of 3 or 7`)
// }

