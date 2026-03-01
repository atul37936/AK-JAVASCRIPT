// 4 4 4 4
// 3 3 3
// 2 2
// 1


let n = 4
for(let i = n;i>=1;i--){
    let rowStr = ""
    for(let j = 1;j<=i;j++){
        rowStr += i;
    }
    console.log(rowStr)
}

// breakdown

// Step 1: i = 4

// rowStr khali hai: ""

// j loop chalega 1 se 4 tak (j <= i).

// Har baar i (jo ki 4 hai) judega: 4 + 4 + 4 + 4 = "4444"

// Output: 4444

// Step 2: i = 3

// rowStr fir se khali: ""

// j loop chalega 1 se 3 tak (j <= i).

// Har baar i (jo ki 3 hai) judega: 3 + 3 + 3 = "333"

// Output: 333

// Step 3: i = 2

// j loop 1 se 2 tak chalega.

// i (2) do baar judega: "22"

// Output: 22

// Step 4: i = 1

// j loop sirf 1 baar chalega.

// i (1) ek baar judega: "1"

// Output: 1