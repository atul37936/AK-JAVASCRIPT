//  print even number from 1 to 20

for(let i = 1 ; i <= 20; i++){
if(i % 2 === 0){
   console.log(i);
}
}

// More Efficient
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// while loop
let k = 1;
while(k <= 20){
  if(k % 2 === 0){
    console.log(k);
  }
  k++
}

// More Efficient
let j = 2;
while (j <= 20) {
    console.log(j);
    j += 2;
}

// do - while loop

// More Efficient
let m = 2 
do {
    console.log(m);
    m += 2;
} while (m <= 20);


let n =1
do{
  if(n % 2 === 0){
    console.log(n);
     }   
  n++
}while(n <= 20);