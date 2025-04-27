//you need the sum of every element in the array

let num = [1,2,3,4,5,6,7,8,9,10]

//reduce method
let ans = num.reduce(function(acc,value){
    let sum = acc+value
    return sum

}, 0)

console.log(ans)
