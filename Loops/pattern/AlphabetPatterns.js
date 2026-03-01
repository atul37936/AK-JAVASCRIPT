// A A A
// B B B
// C C C

let n = 3;
for(let i = 1;i<=n; i++){
    let rowStr = ""
    let char = String.fromCharCode(64 + i);
    for(let j = 1;j<=n;j++){
        rowStr += char + " ";
        }
        console.log(rowStr)
      }           