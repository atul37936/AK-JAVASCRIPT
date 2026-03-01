// Floyd's Logic
// 1 2 3
// 4 5 6
// 7 8 9

let n = 3;
let count = 1; // Ye numbers ko control karega

for (let i = 1; i <= n; i++) {
    let rowStr = "";
    
    for (let j = 1; j <= n; j++) {
        rowStr += count + " "; // Count ko joda aur ek space di
        count++; // Agle number ke liye count ko badha diya
    }
    
    console.log(rowStr);
}