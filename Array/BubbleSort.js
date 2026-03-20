// Sorting (without .sort()) – Implement bubble sort to sort an array.
let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length
let swapped;
console.log("Original array:", arr);

// Bubble sort algorithm

for(let i = 0 ; i< n-1 ; i++){
    swapped = false;
    // Last i elements already in place
    for(j = 0; j<n-i-1; j++){
      if(arr[j]>arr[j+1]){
        // Swap arr[j] and arr[j+1]
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        swapped = true;
      }
    }
    // If no swapping happened, array is already sorted
    if (!swapped) {
      break;
    }
     console.log(`Pass ${i + 1}:`, arr);// har pass ke baad print (optional)
}
console.log("Sorted array:", arr);
 



