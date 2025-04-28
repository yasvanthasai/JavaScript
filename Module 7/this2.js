'use strict' //this 1 and 2 node js mode
console.log(this) //getting an empty object

function displayThis(){
    console.log(this)
}

displayThis() //we get undefined here in strict mode because there is not object

let myObj = {
    name: 'Yash',
    age : 25,
    myFn : function(){
        console.log(this)
    }
 }

 myObj.myFn() //we'll get the object

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

 myObj1.myFn() //we'll get undefined





