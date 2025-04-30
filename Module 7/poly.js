class Animal{
    sound(){
        console.log('animals make different sounds')
    }
}

class Dog{
    sound(){
        console.log('bark')
    }
}

class Cat{
    sound(){
        console.log('meow')
    }
}

let Animal1 = new Animal()
Animal1.sound()

let Dog1 = new Dog()
let Cat1 = new Cat()
Dog1.sound()
Cat1.sound()
