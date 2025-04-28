function createCar(_name,_company,_color){
    this.name = _name
    this.company = _company
    this.color = _color

    this.drive = function(){
        console.log('driving')
    }


}


let car1 = new createCar('X4','BMW','Red')
let car2 = new createCar('X3','BMW','White')
console.log(car1.name)
console.log(car2)
console.log(car1.drive())
