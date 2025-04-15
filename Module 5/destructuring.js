//is js expression that makes it possible to unpack values
// from arrays, or properties from obj, into distinct variables

let arr = ['hi', 'i', , 'am', 'batman']

let [a,b,c,d,e] = arr

console.log(a) //hi
console.log(e) //undefined
console.log(c) //undefined


//destructuring the object
let myObj = {
    name: 'yash',
    age: 25,
    gender:'male',
    address : {
        country: 'India',
        city: 'Tenali'
    }
}

let{f,g,h} = myObj

//you'll get undefined
console.log(f)
console.log(g)
console.log(h)

//let{name : n,age : q,gender : m, address} = myObj


let{name : n,age : q,gender : m, address : {country : w,city : o}} = myObj

//you'll get yash, 25, male
console.log(n)
console.log(q)
console.log(m)

//{ country: 'India', city: 'Tenali' }
//console.log(address)

console.log(w)
console.log(o)







