class Person {
    constructor(_name,_age){
        this.name = _name
        this.age = _age

    }

    welcome(){
        console.log('welcome')

    }
}

let Person1 = new Person('Yash',25)

console.log(Person1)

Person1.welcome()