// console.log('hello-world');

// let age = 27
// console.log(age)  // accepted

// const pi = 80000
// console.log(pi) //accepted

// let myAge;
// console.log(myAge) //undefined

// const myName;
// console.log(myName)  //Error (because const doesnot support empty variable)

// const myCar = 0;
// myCar = 'Alto'
// console.log(myCar)  //Error (because const doesnot support assigning multiple time variable name)

// let myNameIs = 0;
// myNameIs = 'Nithya BR'
// console.log(myNameIs)  //accepted (Let support assigning multiple time variable name with different value)


// Data Types

// Primitive
    
    // String type  //can have single code, double code, back code

        // const myname = "Vishwas";
        // const language = 'JavaScript';
        // const channel = `Codevolution`;
        // console.log(myname);
        // console.log(language);
        // console.log(channel);

    // number Data type  //represent integer and floating point numbers
    
    // const total = 0;
    // const PI = 3.14;

    // Boolean type  // represent logical entities can only have 1 or 2 values, True Or False

    // const isPrimaryNumber = true;
    // const isNewUser = false;

    // Undefined  // represent the valus that is not assigned (Variable assinged but not the value of it)
    
    // let result;
    // console.log(result);

    // const res = undefined; // defining unassigned explicity by giving a value as undefined
    // console.log(res);

    // Null // represent empty or unknown Value

    // const data = null;

    // BigInt // denote a integer value larger than number data type can hold

    // Symbol type // denotes a vlaue that is unique and unchangable

    // Non - Primitive // collection of Values

    // Object - is a complex data type, a object contains properties defined ASCII value pairs

    // Syntax

        // const person = {
        //     'firstName': 'Bruce',
        //     'lastName' : 'wayne',
        //     'age' : 25
        // }
        // console.log('person.firstName');
        // console.log(person.lastName);
        // console.log(person.age);

        // Array type

        // const oddNumber = [1,3,5,7,9]
        // console.log(oddNumber[0])

        // Javascript is a dynamically typed languange which means don't have to sspecify a datatype of a variable when declaring

        // let a = 10;
        // a = 'nithya'
        // a = true
        // console.log(a)


        // Operators // is a special symbol used to perform operations on value and variables

        // Assignment Operator

        // let x = 10;

        // let y = 5;

        // Airthmetic operator

        // console.log(x + y)
        // console.log(x - y)
        // console.log(x * y)
        // console.log(x / y)
        // console.log(x % y)

        // console.log(x++)
        // console.log(++x)
        // console.log(x--)
        // console.log(--x)
        // console.log(y++)
        // console.log(++y)
        // console.log(y--)
        // console.log(--y)

        // Comparision Variable  // compare 2 value and return boolean value either true or false

        // console.log(x == y)
        // console.log(x != y)
        // console.log(x == x)
        // console.log(x === y)
        // console.log(x !== y)

        // console.log(x > y)
        // console.log(x >= y)
        // console.log(y <= x)
        // console.log(y <= x)

        // Logical operators  //Performs logical operations and return true or false

        // let x = 10;

        // let y = 5;

        // console.log(++x)
        // console.log(--y)

        // const isValidNumber = x > 8 && 8 > y  //Logical AND(&) 
        // console.log(isValidNumber)


        // const isValidNumber1 = x > 20 || 8 > y  //Logical OR(||)  // result will be true because 8 is greater that y value(4), or gives one value
        // console.log(isValidNumber1)

        // const isValid = true  //Logical Not (!)  
        // console.log(!isValid)

        // const isValid1 = false  //Logical Not (!)  
        // console.log(!isValid1)


        // // String Operator // can use + operator to join 2 or more strings

        //       console.log('Nithya' + 'BR');

        // // Ternary Operator // returns a value based on condition


        // const isEven1 = 10 % 2 === 0 ? true : false
        // console.log(isEven1)
        
        // const isEven = 10 % 2 === 0 ? 'even Number' : 'odd number'
        // console.log(isEven)



        // Type Conversion // converting one typr to another

        // 2 kind --? Implicit Conversion -- also known as type coercion where JS itself automatically convert the type
                //    Expicit Conversion -- Where you manually convert the type

        // Implicit Type Conversion

        // console.log(2 + '3') // try to add numeric string type the result is a string after concatination

        // console.log(true + '3')

        // // if we use a numeric string with Sub, multiplication, or division the numeric string is a automatically converted into a Number

        // console.log('4' - '2')
        // console.log('4' * '2')
        // console.log('4' / '2')
        // console.log('4' % '2')


        // console.log(4 - 2)
        // console.log('Nithya' - 'BR')  // Nan - Not a Number
        // console.log('5' - false)
        // console.log('5' - true)
        // console.log('5' - null) //if we use null with subtraction it is cosidered as 0 so the value will be 5
        // console.log(5 + undefined) // if we use undefined with number, boolean or the null the result is Not a number(NaN)
        // console.log(5 - undefined)


        // // Expicit type conversion

        // // Number global method

        // console.log(Number(5)) // Convert a string or boolean to numeric types
        // console.log(Number('5'))
        // console.log(Number(false))  // Boolean Value it will return 0
        // console.log(Number('')) //Empty string also return 0
        // console.log(parseInt('5')) 
        // console.log(parseFloat('3.14'))

        // // String global method

        // console.log(String(500))  // Conert other data type into string
        // console.log(String(true))
        // console.log(String(null)) // toString however will not work on null and defined
        // console.log(String(undefined)) // toString however will not work on null and defined

        // console.log((500).toString()) //alternative to string global method

        // // toString however will not work on null and defined

        // /*-----------------------------------------------------------------------*/

        //  //  Global Boolean method  // to convert other data types to boolean can use global boolean method

        // console.log(Boolean(500)) 

        // // Boolean however will not work on null and defined and numeric 0, empty string and Nan all return false whn converted to boolean

        // console.log(Boolean())
        // console.log(Boolean(undefined))
        // console.log(Boolean(0))                           // output will be false
        // console.log(Boolean(''))
        // // console.log(Boolean(nan))


        // console.log(Boolean(' '))          // output will be true because space is consider as a value



        // Equality

        // 2 types of equality

        // == Allows coercion
        // === Doesnot allow coercion



        // const var1 = "test"
        // const var2 = 'test'

        // console.log(var1 == var2)
        // console.log(var1 === var2)


        // const var11 = 10
        // const var12 = '10'

        // console.log(var11 == var12)  // double equals JS coerces the value to the same type so string 10 is converted into numeric 10 automatically and the compared both conatants would be same value and hence the result is true
        // console.log(var11 === var12) // trdiffeneiple equals is more strict and ensures both constant must be of the same type and will not convert implicitly since a number is different from string type false is returned

        // // triple equals is best best to check equaliay because

        // const var111 = 0
        // const var112 = ''

        // console.log(var111 == var112)  // double equals returns true for 0 & empty string, false & empty string, null & undefined (these are all treated as faulty      values in JS and double eqaul treat them as equals)
        // console.log(var111 === var112)



        // COnditional Statements  //used to perform different acrrions based on different conditions

        // if 
        // else 
        // else if
        // switch

        // if

    //     const numm = 5

    //     if (numm > 0){
    //         console.log('positive')  //number is positive and it will logged in the terminal
    //     }

    //     const numme = -5

    //     if (numme > 0){
    //         console.log('positive')  //number is negative it will not log int the terminal
    //     }
        

    //     // else // we can make use of else statement in order to get a negative answers in terminal

    //     const num = -5

    //     if (num > 0){
    //         console.log('positive')
    //     }else{
    //         console.log('negative')
    //     }

    // //    example 2 //To check any 2 conditions will use if else statement

    //     const namme = 38

    //     if (namme > 0){
    //         console.log('no is positve')
    //     }else{
    //         console.log('no is not positive')
    //     }
    


    //     // else if // if we need to print more than 2 alternatives we need if, else if , else statements

    //     // const num1 = 0

    //     // if (num1 > 0){
    //     //     console.log('positive')
    //     // }else if (num1 < 0){
    //     //     console.log('negative')
    //     // }else {
    //     //     console.log('no is Zero')
    //     // }

    //     // example2

    //     const nithya = 0;

    //     if(nithya > 0){
    //         console.log('positive')
    //     } else if(nithya < 0){
    //         console.log('Negative')
    //     }else{
    //         console.log('number is 0')
    //     }


    //     // switch // if we have a large number of choices with little code to excute in each choice switch is used

    //     const color = '10';

    //     switch (color){   //Swicth statments evaluates the expression within parantheses and excutes the code corresponding to the matching case
    //         case 'red':
    //             console.log('red')
    //             break            //break will prevent next case to excute if its true
    //         case 'blue':
    //             console.log('blue')
    //             break
    //         case 'green':
    //         console.log('green')
    //         break
    //         default:
    //             console.log('not a valid color')   // if there is no matching case the default case is excuted
    //     }

    //     // Example 2

    //     const number = 12;

    //     switch (number){
    //             case 10:
    //                 console.log('number is 10')
    //                 break;
    //             case 12:
    //                 console.log('number is 12')
    //                 break;
    //             case 14:
    //                 console.log('number is 14')
    //                 break;
    //                 default:
    //                     console.log('not a valid number')
    //     }



        // Looping Code   // Loops are used to repeat a block of code example( if we want to print 1 to 50 number)

        // 4 looping constructs

        // for loop
        // while loop
        // do-while loop
        // For-of loop

        // For Loop  // 
        // Syntax : for(initializer;condition;final-expression){   // 3 items seperated by semicolon - 
                                // first - initializer(which is run before starting the loop)
                                // second - condition (which is checked to see if the loop should stop)
                                // third - final-expression (which is run each time the loop has gone through an iteration)
        // code to run
        // }

        // Example

        // for(let i=0; i<=5; i++)(
        //     console.log('iteration number' + i)
        // )

        // example 2   //this condition doesnot run in the terminal

        // for(let i=6; i<=5; i++)(
        //     console.log('iteration number' + i)
        // )


        // While Loop  //the parts of while loop are similar to that of for loop but there is a bit of rearrangement

        // Syntax : intializer  //set before the loop
        //             while(condition) {
        //                 code to return
        //                 final-expression //included inside the loop after code to run
        //             }


        // Example

        // let i = 1
        // while( i <= 5){
        //     console.log('iteration number' + i)
        //     i++
        // }


        // example 2

         // let i = 6
        // while( i <= 5){
        //     console.log('iteration number' + i)   //this condition doesnot run in the terminal
        //     i++
        // }

        // Do.while loop // is always excuted at least once that is because the condition comes after the loop

        // Synatx : initializer
        // do{
        //     // run to code

        //     final-expression
        // }while(condition) // condition comes after the loop

        // let i = 1
        // do{
        //     console.log('iteration number' + i)
        //     i++
        // } 
        // while(i <= 5)

        // Example 2

        // let x = 6
        // do{
        //     console.log('iteration number' + x)      // do while excutes the code block once and then evaluates the condition since 6 is greater than 5 the loop is terminated after logging the message once
        //     x++
        // } 
        // while(x <= 5)

        // for.of loop // mainly used to loop over the collection od data like in array

        // Syntax : for (const item of array){
        //          code to run
        //         }

        // example

        // const numArray = [1,2,3,4,5]
        // for (const num of numArray){
        //     console.log('iteration number' + num)
        // }


        // Function  // A JS function is a block of code designed to perform a particular task

        // EX: add 2 numbers, Multiply 2 numbers etc

        // Functions are reusable as they can be defined once and can be called with different values resulting in different results

        // Syntax : function name(parameter1, parameter2, parameter3){
        //     // code to be executed
        // }

    //     example1:

    //     function greet1(){
    //         console.log('Good Morning Nithya')  //  SIngle parameter 
    //     }
    //     greet1()
    //     greet1()  // can call the same function multiple times


    //     // Example2

    //     // username is a Function parameter
    //     // Nithya, Meghana, prajwal are function argument

    //    function greet(username) {      // if person's name is dynamic(multiple names) that way we can use different names and greet multiple people using parameters
    //         console.log('Good Morning ' + username)
    //    }
    //    greet ('Nithya')  //
    //    greet ('Meghana') //
    //    greet ('Prajwal') //Function arguments

    // //    Function can also return a value which we can use later in our code

    // //    example:

    //    function add(a, b){  //here a & b are 2 input parameters
    //     return a + b  // within a function body we add 2 parameters a+b and return the sum from this return function
    //    }

     
    //    const sum = add(25,25)  // 2 numbers added together and returned
    //    console.log(sum)

    // //    Example2

    //    const arrowSum = (a,b) => {
    //     return a + b
    //    }

    //    const sum1 = arrowSum(25,25)  // 2 numbers added together and returned
    //    console.log(sum1)

    // //    Example3

    // const arrowSum1 = (a,b) => a + b

    //    const sum2 = arrowSum1(5,25)  // 2 numbers added together and returned
    //    console.log(sum2)
    
    // Scope  //Scope basically determines the accessibility or visibality of variables

    // 3 tyles of Scope
    //    Block Scope
    //    Function Scope
    //    Global Scope


    // Block Scope  //dictates that variable declared inside a paircurly braces cannot be accesed from outside the block

    // if(true){
    //     const myName = "Nithya"
    // }
    // console.log(myName)  //Javascript throws an error because variable declared inside the brases cannot be accesed outside


    // if(true){
    //     const myName = "Nithya" // const declared variables can only be accesses inside the block they declared in
    //     console.log(myName)
    // }


    // Function Scope

    // function testfn() {
    //     const myName = "Chikku" 
    //     console.log(myName)
    // }
    // testfn()


    // GLobal Scope  //Which is the scope outside any block or a function, a global scoped variable is accessible both inside the block and function
    

    // Example:

    // const myNum = 100
    // const myNamee = 'Nithya R Gowda'  // globally declared variable won't over write the block or fuction scoped variable
    
    // if(true){
    //     const myName = "Nithya" 
    //     console.log(myName)
    //     console.log(myNum)
    // }


    // // Function Scope

    // function testfn() {
    //     const myName = "Chikku"
    //     console.log(myName) 
    //     console.log(myNum)
    // }
    // testfn()



























     


 





        



          




    




