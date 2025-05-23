///undefined
let a;
console.log(a) // undefined

let arr = [1,2,3]
console.log(arr[3]) // undefined

function add(a,b){
    let c = a+b
    return c //if you don't return anything, it will be undefined
}

let sum = add(2,3)
console.log(sum) // 5

//null - explicitly set a variable to null
let myVar = null
console.log(myVar) // null

//not defined - if you try to access a variable that is not defined
console.log(myVar2) // ReferenceError: myVar2 is not defined