// Reverse Even Counting  1 to 20;

// for

// More Efficient
for(let num = 20 ; num>=2 ; num-=2 ){
  console.log(num)
}

for(let num = 20 ; num>=1 ; num--){
   if(num % 2 === 0){
      console.log(num)
   }
}

// while

// More Efficient
let num = 20;
while(num>=2){
  console.log(num);
  num -=2;
}

let num2 = 20
while(num2>=1){
  if(num2 % 2 === 0){
    console.log(num2)
  }
  num2--;
}

// do-while loop

// More Efficient

let i = 20;
do{
console.log(i)
i-=2
}while(i>=2)
  

let j = 20
do{
if(j % 2 === 0){
  console.log(j)
}
  j--;
}while(j>=1)
