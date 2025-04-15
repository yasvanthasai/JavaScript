//callback functions:
//is a function that is passed into another function as argument. This function can be invoked at a laterstage of time.
//functions can be passed as arguments.

function printFirstName(firstname, cb){
    console.log(firstname)
    //use this for callback
    cb('sai')
}
//normal
//printFirstName('ays')

//to impliment callback
printFirstName('ays',printLastName /*this is a function*/)

function printLastName(lastname){
    console.log(lastname)
}


//printLastName('sai')


//-----------//

const isEven = n => {return n%2===0}


let printResult = (evenFn, num) =>{
    const isNumEven = evenFn(num)
    console.log(`the number ${num} is an even number ${isNumEven}`)


}

printResult(isEven,17)