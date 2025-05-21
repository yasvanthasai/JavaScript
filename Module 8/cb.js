const fs = require('fs') //reads a file and gets data
console.log('first line')

// let data = fs.readFileSync('f1.txt', 'utf-8')

// console.log(data)
// let data2 = fs.readFileSync('file2.txt', 'utf-8')

// console.log(data2)
fs.readFile('f1.txt', cb1)
function cb1(err, data){
    if(err){
        console.log(err)
    }
    console.log('File 1 data-> ' + data)
    fs.readFile('file2.txt', cb2)
}



function cb2(err, data){
    if(err){
        console.log(err)
    }
    console.log('File 2 data-> ' + data)
    fs.readFile('f3.txt', cb3)
}



function cb3(err, data){
    if(err){
        console.log(err)
    }
    console.log('File 3 data-> ' + data)
}





console.log('last line')