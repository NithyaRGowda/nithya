// Fundamental Crash Course

// Nested Function Scopes 

// let a = 10
// function outer(){
//     let b = 20
//     function inner(){   //In Js it is possible to define a function within a function
//         let c = 30
//         console.log(a, b, c)
//     }
//     inner()  //when we have nested functions Js variabiable look up the innermost where we are trying to access and moves outward until it reaches the global scope
// }
// outer()  //example of lexical scoping which describes how JS resolves variable names when function are nested


// Clousers // A closure is the combination of function bundled together with references to its surronding state, closures are created every time a function is created, at functio creation time.



// Example:

// function outer(){
//     let counter = 0  // Variable counter is encountered within the inner function then JS engine checks if counter is present in the inner function scope it is not, then checks outer funtion scope and present and increment by 1
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//      inner()
// }

// outer()

// // output:  1


// Example 2:  lets return the function and invoke it later point of time

// function outer(){
//     let counter = 0  // Variable counter is encountered within the inner function then JS engine checks if counter is present in the inner function scope it is not, then checks outer funtion scope and present and increment by 1
//     function inner1(){
//         counter++
//         console.log(counter)
//     }
//      return inner1
// }

// const fn = outer() // we are returning it and invoking the function type twice
// fn()
// fn()   // An inner function has access to variables in the outer functions scope even after the outer function has finished execution


// Function currying  //currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functionsthat takes one argument at a time
// function f(a,b,c) is tranformed to f(a)(b)(c)


// Example:

// function sum(a,b,c){
//     return a+b+c
// }
// console.log(sum(2,3,5))

// // sum(2,3,5) sum(2)(3)(5)  //each functions takes 1 argument at a time


// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c)
//         }
//     }
// }
// }

// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5))



// This // JS THis keyword which is used in a function, refers to the object it belongs to
    // It makes function reusable by letting you decide the object value
    // This value is determined entirely by how a function is called

    // Example:

    // function sayMyName(name){
    //     console.log('my name is ${name}')
    // }

    // sayMyName('walter white')
    // sayMyName('hizenberg')

    // How to determine 'this'
    //  4 ways to invoke a function in Javascript and determine the value of this keyword

    //  1. Implicit binding
    //  2. Explicit binding
    //  3. New binding
    //  4. default binding


    // 1.Implicit Binding

    const person = {
        name : 'Nithya',
        sayMyName : function(){
            console.log('my name is ${this.name}')
        },
    }

    person.sayMyName()  // Implicit binding rule states that when a function is invoked with the dot nototaion the object to the left of the dot is what this keyword is referreing


    // Explicit Binding
    function sayMyName(){
        console.log('my name is ${this.name}')
    }
    sayMyName.call(person)







    // Order of precedence

    // new Binding
    // Explicit Binding
    // implicit Binding
    // Default Binding
   
    // This
    // Prototype
    // iterables and iterators
    // GLobal generators


















