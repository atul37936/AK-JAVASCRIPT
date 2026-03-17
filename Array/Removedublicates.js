// Remove duplicates – From [1,2,2,3,4,4,5] create a new array with unique values.



// using set

let arr = [1,2,2,3,4,4,5]
let uniqueArr = [...new Set(arr)]
console.log(uniqueArr) // [1, 2, 3, 4, 5]



// using filter and indexOf()

let array = [1,2,2,3,4,4,5]
let uniqueArray = array.filter((value , index)=>{
  return array.indexOf(value) === index
})
console.log(uniqueArray) // [1, 2, 3, 4, 5]



// Using reduce()

let arrs = [1,2,2,3,4,4,5]
let uniqueArrs = arrs.reduce((unique, item)=>{
    if(!unique.includes(item)){
        unique.push(item)
    }
    return unique
}, [])
console.log(uniqueArrs) // [1, 2, 3, 4, 5]



// Using a loop and includes()

let dublicate = [1,2,2,3,4,4,5]
let uniqueArrayWithLoop = []
for(let i = 0; i < dublicate.length; i++){
   if (!uniqueArrayWithLoop.includes(dublicate[i])) {
        uniqueArrayWithLoop.push(dublicate[i]);
    }
}
console.log(uniqueArrayWithLoop) // [1, 2, 3, 4, 5]



// Using a loop and indexOf()
let dup = [1,2,2,3,4,4,5]
let uniqueIndexOf = []
for(let i = 0; i < dup.length; i++){
    if(uniqueIndexOf.indexOf(dup[i]) === -1){
        uniqueIndexOf.push(dup[i])
    }
}
console.log(uniqueIndexOf) // [1, 2, 3, 4, 5]