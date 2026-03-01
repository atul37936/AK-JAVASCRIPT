// ****
// ***
// **
// *

    let n = 4
    for(let i = n;i>=1;i--){
        let rowStr = ""
        for(let j = 1;j<=i;j++){
            rowStr += "*";
        }
        console.log(rowStr)
    }



//Breakdown (Step-by-Step)
// Maan lijiye n = 4 hai.

// Iteration 1: Jab i = 4
// Outer Loop: i ki value 4 hai. Condition 4 >= 1 true hai.

// Inner Loop (j): Ye loop 1 se lekar i (yaani 4) tak chalega.

// j=1: rowStr = "*"

// j=2: rowStr = "**"

// j=3: rowStr = "***"

// j=4: rowStr = "****"

// Output: **** (Pehli line print hui).

// Iteration 2: Jab i = 3 (i-- ki wajah se 4 se 3 ho gaya)
// Outer Loop: i ki value 3 hai. Condition 3 >= 1 true hai.

// Inner Loop (j): Ab ye sirf 1 se lekar 3 tak hi chalega.

// j=1, 2, 3 tak chala aur rowStr ban gayi "***".

// Output: *** (Doosri line print hui).

// Iteration 3: Jab i = 2
// Outer Loop: i ki value 2 hai.

// Inner Loop (j): Ye loop sirf 2 baar chalega (j <= 2).

// rowStr ban gayi "**".

// Output: **

// Iteration 4: Jab i = 1
// Outer Loop: i ki value 1 hai.

// Inner Loop (j): Ye sirf 1 baar chalega (j <= 1).

// rowStr ban gayi *.

// Output: *

// Iteration 5: i zero ho jayega (i = 0), condition 0 >= 1 false ho jayegi aur loop ruk jayega.