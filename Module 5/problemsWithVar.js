//var a= 21

var a =35 
//redeclaration of a variable this will be wrong in 
// other coding languages, but here js os allowing



//but here, this will print 35.
console.log(a)

if(a===35){
    var b =40
    console.log(b)
}

// this is a scoping issue, other language has a 
// particular scope within a block, they are functional scoped

console.log(b)

function test(){
    var c= 100
    console.log(c)
}

test()

console.log(c) //this won't work as it's function scope

//js should be blocked scope for security reasons

//1.redeclaration 2. block scope issues

