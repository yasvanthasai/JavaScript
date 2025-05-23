function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }

logA();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();

/*Step-by-step Execution:
Synchronous Code

logA(); runs immediately and prints A.
logD(); runs immediately after and prints D.
setTimeout (Macrotask/Task Queue)

setTimeout(logB, 0); schedules logB to run after all synchronous code and microtasks are finished. It goes into the Task Queue.
Promise (Microtask/Microtask Queue)

Promise.resolve().then(logC); schedules logC to run after the current synchronous code, but before any macrotasks. It goes into the Microtask Queue.*/


//Synchronous code always runs first.
//Microtasks (Promises) run after the synchronous code, before any macrotasks.
//Macrotasks (setTimeout) run after microtasks.

//The output will be:
// A
// D
// C
// B
//This is because logA and logD are synchronous, while logC is a microtask that runs before logB, which is a macrotask.
//This is a common pattern in JavaScript, where you have to be aware of the order of execution for different types of tasks.