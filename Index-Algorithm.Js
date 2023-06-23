Algorithm

An algorithm is a set of well-defined instructions to solve a particular problem

Characteristics  of algorithm should have 
well defined inputs and outputs


Algorithm analysis

there are multiple ways to solve one problem
EX: multiple algorithm to sort a list of numbers

Algorithm alnalysis has 2 evaltion 

Time complexity - Amount of time taken by an algorithm to run, as a function of input size
space complexity - Amount of memory taken by an algorithm to run, as a function of input size

HOw to represent complexity?

Asymptotic Notations - mathemetical tool to represent time and space complexity
3 types Asymptotic notation

Big-O Notation - worst case 
Omega Notation - Best case
Theta Notation - AVerage case

Big -O Notation
    Describes the complexity of an algorithm using algebra terms
        2 imp Characteristics - it is expressed in terms of input
                                it focuses on the bigger picture without getting caught up in the minute details

    Big -O Time complexity

    Object - An object is a collection of key value pairs
    EX: const person = {
        firstName: 'Jai',
        lastName: 'Sri'
    }

    Array  - An array is an ordered colection of values
    EX: const odd= [1,3,5,7,9]
    Array property : shift/ unshift/ concat/ slice/ splice
                    forEach/map/filter/reduce

    Math Algorithms

    Fibinocci sequence - Is a sequence in which each number is the sum of the 2 preceeding ones

    Ex: Fibinocci(2) = [0,1]
    Fibinocci(3) = [0,1,1] //the result of 0,1 is the last 1
    Fibinocci(7) = [0,1,1,2,3,5,8] // the result (0,1-1)(0,1,1 - 2)(1,2- 3)(2,3-5)(3,5-8) //each number is the sum of previous 2 numbers

    Factorial of a number - The factorial of a non-negative integer 'n', denoted n!, is the product of all positive integer less than or eqaul to 'n'

    EX: factorial(4) = 4*3*2*1= 24

    Prime number - is a Natural number greater than 1 that is not a product of 2 smaller natural numbers

    isPrime(5) = true(1*5 or 5*1)

    Power of 2 - an integer is a power of 2 if there exists an integer 'x' such that 'n' === 2X

    is PowerOfTwo(2) = true(2(power of 0))

    Recursion

    Recursion is a problem solving technique where the solution depends on solution to smaller instances of the same problem
    
    Recursion is when a function calls itself

        Search algorithm
        Linear Search
        Binary Search 
        recursive binary search


        Linear search pseudocode
        start at the first element in the array and move towards the last
        At each element through, check if the element is equal to the target element
        if element found return the index of the elemnt
        if elemnent not found return -1

        Binary Search pseudocode

        if the array is empty return-1 as the element cannot be found
        if the array has element, find the middle elemnt in the array, if target is equal to the middle element, return the middle element index
        if the target is less than the middle element binary search left half of the array
        if the target is greater than the middle element binary search right half of the array



