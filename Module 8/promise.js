//how to produce a promise
let myPromise = new Promise(function(resolve, reject){
    const a = 4
    const b = 3

    setTimeout(() => {
        if(a===b){
            resolve('Success')
        }else{
            reject('Failed')
        }
    }, 2000);

})

console.log(myPromise)
//Promise { <pending> }
//this is a promise object that is in a pending state
//it means that the promise is still being processed and has not yet been resolved or rejected

//fullfilled promise
//consume the promise
//then method is used to handle the success case
myPromise.then(function(data){
    console.log(data)
})

//catch method is used to handle the error case
//it is used to handle the rejection case
myPromise.catch(function(data){
    console.log(data)
})
