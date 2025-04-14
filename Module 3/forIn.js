//forIn allows us to loop through the properties of an object.

var colors = {
    primary:'blue',
    secondary:'red',
    tertiary:'white'

}

for(var color in colors){
    console.log(colors[color])
}

//this even works with arrays as arrays are also objects in js

var arr = [2,3,4,5]

for(var values in arr){
    console.log(arr[values])
}



