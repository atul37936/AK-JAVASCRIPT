// 1. .map() — The Transformer
// Maan lijiye aapke paas ek array hai aur aap har element ko badalna (transform) chahte hain. map ek naya array banata hai jisme har element par aapka bataya hua logic apply hota hai.

// Logic: Array ka har item pakdo -> Uspar kaam karo -> Naye array mein daal do.




// 2. .filter() — The Selection Expert
// Jaise naam se pata chalta hai, yeh array mein se sirf un elements ko chunta hai jo aapki condition ko pass karte hain. Yeh bhi ek naya array deta hai.

// Logic: Array ka har item check karo -> Agar condition true hai toh rakho, nahi toh nikaal do.




// 3. .reduce() — The Accumulator
// Yeh thoda "Pro" level ka method hai. Iska kaam hai poore array ko process karke ek single value banana (jaise total sum nikalna).

// Logic: Sabko jodd kar ya process karke ek result nikalna.


// Powerful Challenge (Mixing Everything)

//  mobiles ki prices list :
// let mobilePrices = [15000, 25000, 8000, 45000, 12000];
// Aapko ek aisa program likhna hai jo:
// Pehle filter kare unhe jo 10000 se upar hain.
// Phir map kare unpar 10% discount lagane ke liye.
// Phir reduce kare unka Final Bill nikalne ke liye.
//(Hint: array.filter(...).map(...).reduce(...))

let mobilePrices = [15000, 25000, 8000, 45000, 12000];
let finalBill = mobilePrices
.filter(num => num>10000)
.map(num => num * 0.90)
.reduce((sum,num)=>sum+num,0)
 console.log(finalBill)
//  output node HighOrderMethods.js 87300

//num => num * 0.90 ===  num => num * 0.90