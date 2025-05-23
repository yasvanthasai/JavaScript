//deep copy
//deep copy is a process of creating a new object that is a copy of an existing object, but with all nested objects and arrays also copied
const person = {
    fname: "Adam",
    lname: "Sai",
    age: 25,
    ownsCar: false,
    address: {
        city: 'New York',
        state: 'NY'
    }
}  
 //using json parse and json stringify creates a seperate copy of the object
 let person2 = JSON.parse(JSON.stringify(person))

 //now whatever changes we make to person2 will not affect person
    person2.fname = 'Yash' //this will not affect the original object
    person2.address.city = 'Los Angeles' //this will not affect the original object
    console.log(person2) // { fname: 'Yash', lname: 'Sai', age: 25, ownsCar: false, address: { city: 'Los Angeles', state: 'NY' } }
    console.log(person) // { fname: 'Adam', lname: 'Sai', age: 25, ownsCar: false, address: { city: 'New York', state: 'NY' } }
    //so now we have a deep copy of the object








