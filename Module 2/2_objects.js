//in js objects are key value pair

var person = {
    fname : "Adam",
    lname: "Sai",
    age: 25,
    ownsCar: false
}

console.log(person)

//dot function
console.log(person.age)

//bracket notation
var name = person['fname']
console.log(name)


var abc = {
    fname:'yasvantha',
    lname:'sai',
    age:25,
    friends:['a','b','v'],
    isAvenger: true,
    address:{
        state:'new york',
        city:{
            name:'brooklyn',
            pincode: 123456
        }
    }
}

console.log(abc.friends[1])

console.log(abc.address.city.name)

abc.isAvenger = false,

console.log(abc.isAvenger)

abc.movies = ['sivaji','ninnu kori']

console.log(abc)

delete abc.age

console.log(abc)

