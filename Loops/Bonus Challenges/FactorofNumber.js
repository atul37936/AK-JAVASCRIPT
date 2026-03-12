// Find factors of a number – Print all factors. using loop only

let n = parseInt(process.argv[2]);

console.log(`Factors of ${n} are:`);
for(let i = 1;i<=n/2;i++){
 if(n%i === 0){
    console.log(i)
 }
}


