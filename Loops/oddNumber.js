// Print odd numbers from 1 to 20.

// for loop 

for(let i=1 ; i<=20 ; i++){
  if(i % 2 !== 0){
      console.log(i)
  }
}

// More Efficient
for(let i=3 ; i<=20 ; i+=2){
  console.log(i)
}

// while
let n = 1
while(n <= 20){
  if(n % 2 !== 0){
      console.log(n)
  }
  n++
}

// More Efficient
let j = 3
while(n<=20){
  console.log(j)
  j+=2
}

// do-while

let m = 1
do{
  if(m % 2 !== 0){
      console.log(m)
  }
  m++;
}while(m<=20)

// More Efficient

let k = 3
do{
  console.log(k)
  k+=2;
}while(k<=20)