// A JavaScript to demonstrate properties and methods of Array Collection Reference Type.

// 1. Array Declaration (Reference Type)
let techStack = ["JavaScript", "HTML", "CSS"];

// --- PROPERTIES ---
console.log("Array Length:", techStack.length); // .length property (Total elements)

// --- BASIC METHODS (Adding/Removing) ---

// push: Peeche se add karna
techStack.push("Node.js"); 
console.log("After Push:", techStack); // ["JavaScript", "HTML", "CSS", "Node.js"]

// pop: Peeche se remove karna
let removedElement = techStack.pop(); 
console.log("Popped Element:", removedElement); // "Node.js"

// unshift: Shuruat mein add karna
techStack.unshift("TypeScript");
console.log("After Unshift:", techStack); // ["TypeScript", "JavaScript", "HTML", "CSS"]

// shift: Shuruat se remove karna
techStack.shift(); 
console.log("After Shift:", techStack); // ["JavaScript", "HTML", "CSS"]

// --- SEARCHING & INDEX METHODS ---

// indexOf: Element ki position dhoondna
console.log("Index of HTML:", techStack.indexOf("HTML")); // 1

// includes: Check karna ki element hai ya nahi
console.log("Does it have CSS?", techStack.includes("CSS")); // true

// --- TRANSFORMATION METHODS ---

// reverse: Array ko ulta karna
techStack.reverse();
console.log("Reversed:", techStack); // ["CSS", "HTML", "JavaScript"]

// join: Array ko string mein badalna
let stackString = techStack.join(" -> ");
console.log("Joined String:", stackString); // "CSS -> HTML -> JavaScript"





let original = [1, 2, 3];
let copy = original; // Address copy hua, naya array nahi bana

copy.push(4); 
console.log(original);




//1. slice() — The Copy Maker
// Yeh method array ka ek tukda (slice) kaat kar aapko deta hai, lekin original array ko touch nahi karta.
// Syntax: array.slice(startIndex, endIndex)
let numbers = [10, 20, 30, 40, 50];

let middlePart = numbers.slice(1, 4); 

console.log(middlePart); // [20, 30, 40] (Index 1 se 3 tak)
console.log(numbers);    // [10, 20, 30, 40, 50] (Original same raha)



// 2. splice() — The Modifier
// Yeh method array ke andar "surgery" karta hai. Yeh elements ko remove, replace, ya add kar sakta hai aur yeh original array ko badal deta hai.
// Syntax: array.splice(index, howManyToDelete, item1, item2, ...)
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Index 1 par jao, 2 items delete karo, aur "Kiwi" add karo
fruits.splice(1, 2, "Kiwi");

console.log(fruits); // ["Apple", "Kiwi", "Orange"] (Original badal gaya!)
