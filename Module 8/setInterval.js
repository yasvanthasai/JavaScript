function hello(){
    console.log('hello')
}

let timer = setInterval(hello, 2000)
// setInterval is a function that takes a callback function and a delay in milliseconds
// it will execute the callback function after the specified delay
// in this case, it will execute the hello function every 2 seconds
// setInterval is a built-in function in JavaScript that allows you to execute a function repeatedly at specified intervals.

setTimeout(function(){
    clearInterval(timer)
},3000)

