// Async Javascript

// Javascript is synchronous, blocking and single threaded langauage
// to make async programming possible, JS alone isn't enough we also need the web browser

// synchronous - If we have 2 function which log messaes to the console, code excutes top dowm with only one line excuting at any given TimeRanges

// ex: function a(){
//     console.log('A')
// }
// function b(){
//     console.log('B')
// }
// a()
// b()

// // output:  JS always log a and then b the second point in the Javascript

// Blocking: No matter how long a previous process takes the subsequent processess won't kick off until the former is completed

// Single threaded: A thread is simply a process that your Javascript program can use to run a task and each thread can do only do one ata a time

// Timeout and intervals

// Traditional method JS has available for running code acsyncornously

//     after a set time period elapsed or at regular interval of time

//     SetTimeout()
//     setInterval()


//     setTimeout()  // the setTimeout() excutes  a praricular blocf code once after a specified time has elapsed

//     Syntax : setTimeout(function, duration, param1,param2,...)

//     the first parameter is a function to run, or a reference to a function defined elsewhere
//     the second parameter is a number representing the duration in miliseconds to wait before executing the code
//     after the second paramenter, you can pass in 0 or more values that represent any parameters you want to pass the function when it is run

//     Example:

    // function greet(){
    //     console.log('hello')
    // }

    // setTimeout(greet,2000) // without parameters

    // Example 2:

    // function greet1(name) {
    //     console.log('hello ${name}')
    // }

    // setTimeout(greet,2000,'Nithya')

    // Note: TO clear a setTimeout, you can use the clearTimeout() method passing in the identifier returned by setTimeout as a parameter

    // function greet(){
    //     console.log('hello ${name}')
    //     }
    //     const timeoutId = setTimeout(greet, 2000 , 'Nithya')
    //     clearTimeout(timeoutId)


    //     setInterval()  // the setInterval() repeatedly runs the same code over and over again at regular intervals

//     Syntax : setTimeout(function, duration, param1,param2,...)

//     the first parameter is code to excute
//     the second parameter is uration in miliseconds
//     after the second paramenter, you can pass in 0 or more values that represent any parameters you want to pass the function when it is run

// Example:

//   function greet(){
//         console.log('hello')
//     }

//     setInterval(greet,2000) // without parameters


//     intervals keep running a k forever so we should clear the interval when appropriate

//     can do that using clearInterval()

    // function greet(){
    //     console.log('hello')
    // }

    // setInterval(greet,2000) // without parameters

    // // Example:  
    // const intervalId = setInterval(greet, 2000, 'Nithya')
    // clearInterval(intervalId)


    // Callbacks

    // Any function that is passed as an argument to another function is called a call back function in JS
    // The function which accepts a function as an argument or return a function is called a higher order function

    // Why need callbacks // we can answer by categorizing into 2

    // Asynchronous
    // Synchronous

    // Syncronous callback : A callback which is executed immediatley is called Synchronous callback
    // ex: a more practicle example is a callback function passed to methods like sort, map or filter


    // Asynchronous callback : A Asynchronous callback is a callback that is often used to continue or resume code execution after an Asynchronous operation has completed
    // callbacks are used to used to delay the execution of a function until a particular time or even has occured
    // Data fetching items takes time and we can only run the function we want to after the data has been fetched and not immediatley

    // ex: SetTimeout is the first example - act as a higher order function
    //     eventhandlers is the second


    // Callback Summary

    // callback are function passed as arguments to other functions
    // They can be synchronous if they execute immediatly or they can be asynchronous where they get executed after some time has passed, some events has occured or some data has been fetched


    // Promise - MDN defenition

    // A promise is a proxy for a value not necessarialiy known when the promise is created it allows you to associate handlers with an asynchronous actions eventual success values or failure reason

    // A promise ia simply a object in JS

    // A promise is always in ne of the 3 states

    // Pending: which is initial state, neither fullfilled nor rejected
    // fullfilled: maening that the operation completed successfully
    // rejected: meaning that the operation failed

    // why would use promises?

    // promises help us deal with asynchronous code in a far more simpler way compared to call backs

    // how to work with promises?

    // promise
    // promise value
    // fulfill promise
    // reject promise
    // success Callback
    // failure Callback

    // how to create a promise

    // synatx: const promise = new promise()

    // how to fullfill or reject a promise

    // const promises  = new promises{(resolve, reject ) => {

    //     //resolve and reject both are function

    //     //resolve:  is a function which when called changes the status of the promise from pending to fullfilled
    //     //reject : is a function when called changes the status of the promise to reject it
    // }}

    // ex: const promise  = new promise{(resolve, reject) => {
    //     resolve()
    // }, 2000} setTimeout is resolve/execute if the promise is succesful

    // ex: const promise  = new promise{(resolve, reject) => {
    //     reject()
    // },2000}  setTimeout is rejected if the promise is succesful


    // note: when we create a new promise using the promise constructor function the promise object gives us access  to 2 methods/function

    // 1.Then
    // 2.catch

    // if the status of promise nges from pending to fulfilled by calling the resolve function that is passed to then function will automatically get invoked

    // if the status of the promise changes from the  pending to  rejected by calling the reject function that is passed to catch function will automatically get invoked

    // async wait

    // async keyword used to declare async funtions
    // async functions are function that are instances of the asyncronization constructor
    // async funtion always returns a promise

    // ex: 
    // async function greet() { return 'hello'} //async funtialways returns promise
    // greet()

    // output: promise{(fullfilled) 'hello'}


    // await 

    // await keyword can be put infornt of any asynce promise based function to pause your code until that promise settles and return as XPathResult
    // it only works inside async function, cannot use await in normol functions

    // Sequential vs concurrent vs parallel execution 


    // Event Loop

    // Js runtime environmental

    // 1. JS Engine - this comprises of memory heap and call stack

    // Whenever we declare variables or function memory  is located on the heap
    // Whenever we execute code functionare pushed onto the call back and funtion returns it is popped off the call stack

    // 2. Web API's - Ex: timeout, promise xhr request, dom etc (these Api's are implemented in JS, they are feature provided by the browser that js simply as access to)

    // 3. callback Queue/ task Queue - this Queue is FIFO DS

    // 4. Event Loop - has only one job, check if the call stack is empty and if it push an Item from the Queue into the stack

    // ex: Synchronous code: 

    // Async setTimeout code
    // Async promise code








    
    
























    

