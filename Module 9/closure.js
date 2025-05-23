function test() {
  console.log("test");
  let a = 10;
  function inner() {
    console.log(a); // 10
  }
  return inner;
}

let fun = test();
fun(); // 10
console.log(fun)    // [Function: inner]

//this is called closure
//closure is a function that has access to the parent scope, even after the parent function has closed

function greet(){
    let name = 'John'
    function displayName(){
        console.log(name)
        let age = 20
        function displayAge(){
            console.log('age')
        }
        return displayAge
    }
    return displayName  

}

let g1 = greet()
console.log(g1) // [Function: displayName]
g1() // John

let g2 = g1()
console.log(g2) // [Function: displayAge]
g2() // age