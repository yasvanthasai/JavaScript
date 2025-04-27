//in memory excution a will be undefined
// and function would be stored as greet initially
//this above senario comes when we execute line 13 and 14 first before the code

//add(2,4) - this won't work

var a = 'hi'
greet()
function greet(){
    console.log('hello from function')
}
//above is normal function

console.log(a)
greet()

//below is function expression
var add = function(a,b){
    console.log(a+b)
}

//add(2,4) - this will work as we defined the var above