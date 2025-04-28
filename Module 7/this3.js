
console.log(this) //javascript windows functions will be there in inspect console


function displayThis(){
    console.log(this)
}

displayThis() //javascript windows functions will be there in inspect console


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

 myObj1.myFn() //javascript windows functions will be there in inspect console
 




