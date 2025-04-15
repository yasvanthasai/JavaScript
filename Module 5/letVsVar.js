//Redeclaration problem

var a = 20

//var a = 35 in var you can do this


//this is the solution for the redeclaration problem
let  b =30

b = 89 // reasigning is possible in let
//let  b = 45 but for let you cannot do this



console.log(a)
console.log(b)


//scoping problem

if(true){
    var c = 40
    console.log(c)
}

console.log(c)


if(true){
    let d = 39
    console.log(d)
}
//this won't work becasue we used let keyword
//console.log(d)


// const
//same as let but doesn't allow reassigning - it's like final in java

const e = 100

//const e = 102 won't work
//e = 89 won't work

console.log(e)










