let person1 = {
    firstName:'steve',
    lastName:'rogers',
    age : 102,
 
}

let  printDetails = function(city){
    console.log(`${this.firstName} from ${city}`)
}

let person2 = {
    firstName:'tony',
    lastName:'stark',
    age : 41
}

//call
printDetails.call(person2, 'new york')
//apply
printDetails.apply(person1, ['new york']) //always in array

//bind
//helps to store your function and use it for later
let fun = printDetails.bind(person2, 'new york')
console.log(fun)
fun()


//person1.printDetails()
//person2.printDetails()