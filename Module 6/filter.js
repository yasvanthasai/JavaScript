//you have to check for even numbers in an array and put them ina seperate array
let numbers = [1,2,30,35,12,17,46]
let even = []
for(let i =0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        even.push(numbers[i])
    }
}
console.log(even)

//filter method - usually used for checking a condition

let num = [1,2,30,35,12,17,46]
let even1 = num.filter(n => {
    return n%2==0
})

console.log(even1)

const transactions = [1000,2000,4000,3000,-900,3800,-4500]
let m = transactions.filter(function(n){
    return n>0
})
console.log(m)

