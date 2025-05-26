let arr = [1,2,3]
Array.isArray(arr) // true
Array.isArray({}) // false

function Person(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}
const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');
console.log(lydia);
console.log(sarah);