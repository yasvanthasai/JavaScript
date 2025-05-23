/// spread operator {...}

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

const person2 = {...person} // shallow copy
person2.name = 'Yash' //this will not affect the original object
person2.address.city = 'Los Angeles' //this will affect the original object
// because the address property is an object, and objects are reference types
console.log(person2) // { fname: 'Adam', lname: 'Sai', age: 30, ownsCar: true }
console.log(person) // { fname: 'Adam', lname: 'Sai', age: 25, ownsCar: false }

//so to aviod this we can use deep copy
//deep copy


