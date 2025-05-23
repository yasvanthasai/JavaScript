let firstPerson = 'John'
let secondPerson = firstPerson

firstPerson = 'Doe'
// firstPerson is a primitive value, so when we assign it to secondPerson, it creates a copy of the value

console.log(firstPerson) // John
console.log(secondPerson) // John
// secondPerson is a reference to the same value as firstPerson, so when we change firstPerson, it doesn't affect secondPerson
console.log(firstPerson) // Doe
console.log(secondPerson) // John

let firstPersonObj = {
    name: 'John'
}   
let secondPersonObj = firstPersonObj
console.log(firstPersonObj.name) // John
console.log(secondPersonObj.name) // John
firstPersonObj.name = 'Doe'
// firstPersonObj is a reference to an object, so when we assign it to secondPersonObj, it creates a reference to the same object
console.log(firstPersonObj.name) // Doe
console.log(secondPersonObj.name) // Doe
// secondPersonObj is a reference to the same object as firstPersonObj, so when we change firstPersonObj, it also affects secondPersonObj


//primitive datatypes are created in the stack
//string
//number
//boolean
//null
//undefined
//symbol
//bigint

//reference datatypes are created in the heap
//object
//array
//function
//date
//regex
//map
//set

//in stack you have a reference to the value
//in heap you have the value itself



