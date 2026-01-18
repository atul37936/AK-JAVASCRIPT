// Even or odd.

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});
r1.question('enter a number:', (input)=>{
  let num = parseInt(input)
  if (num % 2 === 0){
    console.log(num + " is even number");
  }else{
    console.log(num + 'is odd')
  }
  r1.close();
});

// let num = parseInt(process.argv[2]);

// // Your if-else logic here
// if (num % 2 === 0) {
//     console.log(`${num} is Even`);  
// } else {
//     console.log(`${num} is Odd`);
// }
