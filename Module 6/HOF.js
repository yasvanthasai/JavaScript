//Higher Order Functions
 arr = [1,2,3,4,5]
for(let val of arr){
    console.log(val*val)
}

let ans =[]
for(let val of arr){
    ans.push(val*val)
}

console.log(ans)

//map
//map will loop tp every elenet of the array and perform specific operations that you have provided
//map will always return you a new array with your results

const num = [1,2,3,4,5,6]
const s = num.map(function(n){
    return n*n
})

console.log(s)

const transactions = [1000,2000,4000,3000,-900,3800,-4500]
const intToDollar = transactions.map(n => {return (n*87).toFixed(0)})

console.log(intToDollar)

const intToDollar1 = transactions.forEach(n => console.log(n*87))
//console.log(intToDollar1) - this is undefined








