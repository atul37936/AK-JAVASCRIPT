// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

let n = 4
for(let i = 1;i<=n; i++){
  let rowStr = ""
  for(let j = 1;j<=4;j++){ //column size = 4
      rowStr += i;
  }
  console.log(rowStr)
} 