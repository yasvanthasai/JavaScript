function Person(_name,_age){
    this.name = _name
    this.age=_age

    this.getNameAndAge = function(){
        console.log(`i AM ${this.name}`)
    }
    //above method is not in the prototype, to not repeat itself, we'll add in protitype object
}

Person.prototype.getAge = function(){
    console.log(`i AM ${this.age}`)
} //this will linked to all the objects

let person1 = new Person('yash',23)
let person2 = new Person('yahsvbn',89)

console.log(person1.getAge)
console.log(person2)
