// Divisible by 5 and 11.

let Divisible = parseInt(process.argv[2]);

if (Divisible % 5 === 0 && Divisible % 11 === 0){
  console.log(`${Divisible} is divisible 5 and 11`)
}else{
  console.log(`${Divisible} is not divisible 5 and 11 `)
}