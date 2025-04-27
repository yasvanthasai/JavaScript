//some method - returns a boolean value on a condition, it will only return true if atleast 1 should satisfy the condition
const transactions = [-1000,-2000,-4000,-3000,-900,-3800,-4500]
let result = transactions.some(n => {return n>0})
console.log(result)

//every - exactly like some but every element should satisfy
let result1 = transactions.every(n => {return n<0})
console.log(result1)
