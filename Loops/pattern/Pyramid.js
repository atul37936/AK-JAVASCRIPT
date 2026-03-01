let n = 4;
for (let i = 1; i <= n; i++) {
    let rowStr = "";
    
    // Step 1: Spaces print karo
    for (let s = 1; s <= (n - i); s++) {
        rowStr += " ";
    }
    
    // Step 2: Stars print karo (2*i - 1)
    for (let j = 1; j <= (2 * i - 1); j++) {
        rowStr += "*";
    }
    
    console.log(rowStr);
}
