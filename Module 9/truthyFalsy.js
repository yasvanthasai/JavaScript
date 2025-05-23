let a = 2

if (a) {
    console.log('I am truthy')
}else{
    console.log('I am falsy')
}

//if a==2 it's true, if a==0 it's false because 0 is falsy.
//these are the list of values where js considers them as falsy
// 0
// -0
// NaN
// null
// undefined
// false
// '' or "" or ``
// document.all
// 0n
// all other values are truthy