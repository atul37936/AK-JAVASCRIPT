// Matrix addition – Work with 2D arrays (arrays inside arrays).

let MatrixA = [ [1, 2, 3],
[4, 5, 6] ];

let MatrixB = [
[7, 8, 9],
[1, 2, 3] ];

if (MatrixA.length !== MatrixB.length || MatrixA[0].length !== MatrixB[0].length) {
    console.log("Matrices ka size same nahi hai! Addition possible nahi.");
}else{
      let rows = MatrixA.length;
    let cols = MatrixA[0].length;

      let result = [];
      for(let i = 0; i < rows; i++){
        result[i] = [];
        for(let j = 0; j < cols; j++){
            result[i][j] = MatrixA[i][j] + MatrixB[i][j];
      }
    }
     console.log("Matrix A:", MatrixA);
    console.log("Matrix B:", MatrixB);
    console.log("Result (A + B):", result);

}

// Code Explanation

// matrixA aur matrixB – do 2D arrays (matrices) define  kiye.

// Size check – pehle check kiya ki dono matrices ki rows aur columns same hain ya nahi. Agar nahi, to error message dekar program rok diya.

// rows aur cols – matrix ki dimensions store kiye.

// result array – ek empty array banaya jo result store karega.

// Outer loop (i) – har row ke liye.

// result[i] = [] – har row ke liye ek naya array banaya.

// Inner loop (j) – har column ke liye.

// result[i][j] = matrixA[i][j] + matrixB[i][j] – dono matrices ke corresponding elements ko add kiya.

// Print – teeno matrices print kar diye.