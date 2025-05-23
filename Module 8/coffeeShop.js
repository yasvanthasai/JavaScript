function placeOrder(drink){
    return new Promise((resolve, reject) => {
        if(drink === 'coffee'){
            resolve('Order placed successfully')
        }else{
            reject('Order failed')
        }
    })
}

function processOrder(order){
    return new Promise((resolve, reject) => {
            if(order === 'Order placed successfully'){
                resolve('Order processed successfully')
            }else{
                reject('Order processing failed')
            }
    })
}

/*placeOrder('coffee').then((order) => {
    console.log(order)
    let orderIsProcessed = processOrder(order).then((processedOrder) => {
        console.log(processedOrder)
    })
}) */
//chain the promises - solution with promises
//promise chaining

//async await
//they work same as promisess but they are more readable
//async function

async function serveOrder(){
    try{
        const order = await placeOrder('soup')
        console.log(order)
        try {
            const processedOrder = await processOrder(order)
            console.log(processedOrder)
        } catch (error) {
            console.log(error)
        }
    }catch(error){
        console.log(error)
    }
}
//await is used to wait for the promise to be resolved
//async function is used to define an asynchronous function
serveOrder()


//promises code will be executed first than the callback code
//callback code will be executed after the promise code