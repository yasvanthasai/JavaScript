//non strict code, understanding of keyword this
console.log(this) //{} empty object

function displayThis(){
    console.log(this)
}

displayThis() //output is global object
//above output
{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: value],
  crypto: [Getter]
} */} //this is a global object inside node.js that holds particular methods

//inside the object we define a function
 let myObj = {
    name: 'Yash',
    age : 25,
    myFn : function(){
        console.log(this)
    }
 }

 myObj.myFn() //refer to it's particular object which is being created

 //obj -> fn -> fn
 let myObj1 = {
    name: 'Yash',
    age : 25,
    myFn : function(){
        function myFn3(){
            console.log(this)

        }
        myFn3()
    }
 }

 myObj1.myFn() //here we'll get the global object line no 10


