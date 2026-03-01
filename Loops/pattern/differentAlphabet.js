// A B C
// A B C
// A B C

  let n = 3;
for (let i = 1; i <= n; i++) {
    let rowStr = "";
    for (let j = 1; j <= n; j++) {
        // Har baar j badal raha hai, toh characters bhi A, B, C honge
        rowStr += String.fromCharCode(64 + j) + " ";
    }
    console.log(rowStr);
}