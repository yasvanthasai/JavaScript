var scores = [60,90,80,75]

//syntax

for(var score of scores){
    console.log(score)
}

//above accesses the values but for forIn, it used the index

//but for you to access the index follow the below

let colors = ['red','blue','green']

for(var [index,color] of colors.entries()){
    console.log(index,color)
}

//Strings

var str = 'yasvantha'

for(var values of str){
    console.log(values)
}