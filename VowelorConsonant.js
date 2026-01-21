// const { stdin, stdout } = require('process');

// const readline = require('readline').createInterface({
//   input: stdin,
//   output: stdout
// })

// readline.question(`enter a number (char): `, (input)=>{
//   let char = String(input);
//   if(char === 'a'|| char === 'e'|| char === 'i'|| char === 'o'|| char === 'u'|| char === 'A'|| char === 'E'|| char === 'I'|| char === 'O'|| char === 'U'){
//        console.log(`${char} is vowel`)
//   }else{
//     console.log(`${char} is Consonant`)
//   }
// });

 const { stdin, stdout } = require('process');

 const readline = require('readline').createInterface({
   input: stdin,
   output: stdout
 })
readline.question(`enter a number (char): `, (input) => {
  let char = String(input).toLowerCase(); // Sabko small kar do
  
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(`${input} is vowel`);
  } else {
    console.log(`${input} is Consonant`);
  }
});

// include Method

// const { stdin, stdout } = require('process');

// const readline = require('readline').createInterface({
//   input: stdin,
//   output: stdout
// })
// readline.question(`enter a number (char): `, (input) => {
//   let vowels = "aeiouAEIOU";
  
//   // Includes check karta hai ki input inme se koi ek hai ya nahi
//   if (vowels.includes(input)) {
//     console.log(`${input} is vowel`);
//   } else {
//     console.log(`${input} is Consonant`);
//   }
// });



// let char = process.argv[2]

// if (char === 'a'|| char === 'e'|| char === 'i'|| char === 'o'|| char === 'u'|| char === 'A'|| char === 'E'|| char === 'I'|| char === 'O'|| char === 'U'){
//       console.log(`${char} is vowel`)
// }else{
//       console.log(`${char} is Consonant`)
// }


// ternary

// let char = process.argv[2]
// let vowels = "aeiouAEIOU";

// let result = vowels.includes(char) ? "Vowel" : "Consonant";
// console.log(result); // Output: Vowel


// readline.question(`enter a character: `, (input) => {
//   let char = input.toLowerCase();
//   let vowels = "aeiou";

//   // Check if it's a single alphabet letter
//   if (char.length === 1 && char >= 'a' && char <= 'z') {
//       let result = vowels.includes(char) ? "vowel" : "consonant";
//       console.log(`${input} is ${result}`);
//   } else {
//       console.log("Please enter a valid single alphabet.");
//   }
// });