// *
// **
// ***
// ****

let n = 4
for(let i = 1;i<=n; i++){// Step 1: Rows
    let rowStr = ""
    for(let j = 1;j<=i;j++){// Step 2 & 3: Columns based on Row number
            rowStr += "*";// Step 4: What to print
    }
        console.log(rowStr)// Line change
}