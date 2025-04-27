//find works as filter but returns only 1 element which satisfies the condition
const transactions = [1000,2000,4000,3000,-900,3800,-4500]

let f = transactions.find(n => {return n<0})
console.log(f)

//findIndex
let g = transactions.findIndex(n => {return n<0})
console.log(`first withdrawal index is ${g}`)


