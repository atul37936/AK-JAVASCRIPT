// A
// B B
// C C C
// D D D D

let n = 4;
for(let i = 1;i<=n;i++){
  let rowStr = "";
  let char = String.fromCharCode(64 + i);
  for(let j =1;j<=i;j++){
    rowStr += char + " ";
  }
  console.log(rowStr);
}