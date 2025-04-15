let a =4 //output is based on this factor, so add() is a impure function

function addImpure(x){
    console.log(x+a)
    a++
}

//here values will change
addImpure(2)
addImpure(2)
addImpure(2)

function addPure(x,b){
    return x+a
    b++
}

//console.log() outside the function makes it a pure function
//here the answer is same for all
addPure(2,3)
addPure(2,3)
addPure(2,3)
addPure(2,3)