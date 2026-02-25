// Check palindrome – Input a string, check if it reads the same forwards/backwards.

let str = process.argv[2]

if(!str){
    console.log("Error: Please provide a valid string.");
       process.exit(1);
  }

let left = 0
let right = str.length - 1
let isPalindrome = true

while(left < right){
    if(str[left] !== str[right]){
        isPalindrome = false
        break;
    }
    left++
    right--
}
if(isPalindrome){
    console.log(`${str} is a Palindrome.`);
}else{
    console.log(`${str} is not a Palindrome.`);
}