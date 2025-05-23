let sum  = function(a,b){
    return a+b
}
console.log(sum(2,3)) // 5

let sumCurrying = function(a){
    return function(b){
        return a+b
    }
}
console.log(sumCurrying(2)(3)) // 5
//this is called currying
//this is a function that takes a function as an argument
//and returns a function
