// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

let n = 4
for(let i = 1;i<=n; i++){
  let rowStr = ""
  for(let j = 1;j<=4;j++){ //column size = 4
      rowStr += j;
  }
  console.log(rowStr)
}

// breakDown

// 1. Pehli Manzil (i = 1):

// rowStr khali ho jati hai: ""

// Ab Service wala (j) aata hai aur 4 baar chalta hai:

// j=1: rowStr ban gayi "1"

// j=2: rowStr ban gayi "12"

// j=3: rowStr ban gayi "123"

// j=4: rowStr ban gayi "1234"

// Service khatam! Lift (i) ne 1234 print kiya aur upar chali gayi.

// 2. Doosri Manzil (i = 2):

// Dhyan dein: rowStr fir se khali ho jati hai ("").

// Service wala (j) fir se 1 se shuru karta hai:

// j=1, 2, 3, 4 tak chalta hai aur rowStr ko fir se "1234" bana deta hai.

// Lift ne 1234 print kiya aur upar chali gayi.