let myObj = {}

console.log(myObj)

let person1 = {
    name : 'yash',
    age : 25
}
console.log(person1)
console.log(person1.hasOwnProperty('name')) //true
console.log(person1.hasOwnProperty('gender')) //false

//prototype object is an object which is always linked to your object as output

//constructor function


function Person(_name,_age){
    this.name = _name
    this.age+_age
}

let person2 = new Person('steve',35)

console.log(person2)

/* JavaScript Prototype and Inheritance – Notes

Every object in JavaScript has a hidden internal link to another object called its prototype.

JavaScript provides a built-in Object prototype which contains pre-built methods and properties like toString, hasOwnProperty, etc.

If a property or method is not found in the object itself, JavaScript automatically looks up the prototype chain to find it. This is called prototype chaining.

Constructor functions (like a Person function) are used to create multiple objects. Each object created using the constructor function points to the same prototype of that constructor.

All the objects created using the same constructor can reuse methods defined in the prototype, instead of having separate copies of those methods.

For example, if two people objects are created using a constructor, they both link to the same prototype which may contain shared methods like greet.

That constructor’s prototype then links to the main Object prototype, which is the built-in prototype provided by JavaScript. This chain continues until it ends at null.

This chaining system helps in reusing code, saving memory, and allows objects to inherit behavior from other objects.

If JavaScript doesn't find a property in an object, it checks the prototype. If not found there, it goes up the chain. If it's nowhere to be found, it returns undefined.

The image also mentions terms like "you reuse" indicating how shared methods in the prototype are reused, and "main container" referring to the Object prototype being the final fallback in the chain.*/

