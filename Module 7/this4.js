'use strict' //this 3 and 4 browser
console.log(this) //javascript windows functions will be there in inspect console


function displayThis(){
    console.log(this)
}

displayThis() //undefined

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

 myObj1.myFn() //undefined
 




