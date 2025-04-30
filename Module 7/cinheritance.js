class Person{
    constructor(_name,_age){
        this.name=_name
        this.age=_age
    }
    welcome(){
        console.log(`${this.name}`)
    }

}



class Teacher extends Person{
    constructor(_name,_age,_classStrength){
        super(_name,_age)
        this._classStrength = _classStrength
    }

    test(){
        super.welcome()
    }
}

class Student extends Person{
    constructor(_name,_age,_cgpa){
        super(_name,_age)
        this.cgpa = _cgpa
    }


}

let Person1 = new Person('Yash',25)
console.log(Person1)
console.log("Check")
let Teacher1 = new Teacher('Bharath',45,75)
console.log(Teacher1)
Teacher1.test()

