// Palindrome Check

let word = "level";
let palindrome = word.split("").reverse().join("")

if(word === palindrome){
    console.log(word, "is a palindrome");
}else{
    console.log(word, "is not a palindrome");
}