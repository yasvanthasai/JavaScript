//we will be given a numebr abd need to check if sqaure of the number is even or odd

//imperative way of writing code
const a = 5
const aSquare = a*a

let isEven;

if(aSquare % 2==0){
    isEven = true

}else{
    isEven  = false
}

console.log(isEven)

//declarating way of writing the code
//no need to declare variable, no control flows, short code
const checkForSquare = (x) => (x*x%2===0 ? true : false)

console.log(checkForSquare(6))