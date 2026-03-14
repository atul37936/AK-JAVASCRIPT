let prices = [100, 20, 5, 50, 10];
prices.sort();
console.log("Ajeeb Sorting:", prices); 
// Output: [10, 100, 20, 5, 50] (Kyunki 1, 2, 5 ke sequence mein chalta hai)
prices.sort((a , b) => a-b)
console.log("Sorting (Ascending):", prices)
// Output: [5, 10, 20, 50, 100] 
prices.sort((a , b) => b-a)
console.log("Sorting (Descending):", prices)
// Output: [100, 50, 20, 10, 5]

