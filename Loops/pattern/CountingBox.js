// Floyd's Triangle Logic
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10

let n = 4
let count = 1// Ye numbers ko yaad rakhega
for(let i = 1;i<=n;i++){
    let rowStr = ""
    for(let j = 1;j<=i;j++){
       rowStr += count + " ";// Count print karo aur space do
      count++; // Agle number ke liye count ko 1 badha do
}
       
    console.log(rowStr)
   
}

// Breakdown (Kaise kaam kar raha hai?)
// Maan lijiye n = 4 aur shuruat mein count = 1 hai.

// Row 1 (i=1):

// Inner loop 1 baar chala.

// rowStr mein count (1) joda. count ab 2 ho gaya.

// Output: 1

// Row 2 (i=2):

// Inner loop 2 baar chala.

// Pehli baar: count (2) joda. count ab 3 ho gaya.

// Doosri baar: count (3) joda. count ab 4 ho gaya.

// Output: 2 3

// Row 3 (i=3):

// Inner loop 3 baar chala.

// count (4, 5, 6) ko joda. count ab 7 ho gaya.

// Output: 4 5 6