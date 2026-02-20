// Reverse Odd Counting Number 1 to 20

// for

// More Efficient
for(let num = 19; num>=3 ; num -=2){
  console.log(num)
}

for(let num = 20; num>=1 ; num--){
    if(num % 2 !== 0){
     console.log(num) 
    }
}

// while

// More Efficient

let num = 19;
while(num >= 3){
    console.log(num);
    num -= 2;
}

let i = 20;
while(i >= 1){
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}

// do -while

// More Efficient

let n = 19;
do{
    console.log(n)
  n -=2
}while(n>=3)
  

let m = 20;
do{
    if(m % 2 !== 0){
        console.log(m)
    }
    m--;
}while(m>=1)