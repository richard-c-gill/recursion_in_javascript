// Given an array of integers, write a recursive function 
// that returns the sum of all itegers in the array.

// This type of problem is often solved using looping/iteration,
// but can also be solved recursively. If you want, you can
// first solve the problem using a loop and then refactor
// to use recursion.

// Remember to create a base case/exit condition to prevent 
// a stack overflow.

// Examples:

// sumArray([10, 20]) => 30
// sumArray([2, 4, 6, 8]) => 20
// sumArray([1, 2, 3, 4, 5]) => 15

// set global variabe * I DON'T LIKE USING GLOBAL VARIABLES!
let placeHolder = 0


var sumArray = function(arr) {

// Create if else statement
  if (arr.length) {
    placeHolder = placeHolder + arr[0];

    // making simple solution where original array is modified
    console.log(arr)
    arr.shift()
    return sumArray(arr);

// fixed problem where place holder keeps values from past function calls
  } else {
    let returnValue = placeHolder
    placeHolder = 0
    return returnValue
    
    
  }
  
};