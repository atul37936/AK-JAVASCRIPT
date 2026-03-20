// Palindrome array – Check if an array reads the same forwards and backwards (e.g., [1,2,3,2,1]).

let arr =[ [1,2,3,2,1],
        [1, 2, 3, 4, 5],
    [7],
    []
]


for(let arrs of arr){

   let start = 0
   let end = arrs.length - 1
   let palindrome = true

    while(start < end){
        if(arrs[start] !== arrs[end]){
            palindrome = false
            break;
}
        start++
        end--
    }
   console.log(arr, "→", palindrome ? "Palindrome" : "Not Palindrome");
}

