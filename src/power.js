// Given two integers -- a base and an exponent -- write a 
// recursive function that computes the exponent math and 
// returns the result.

// Exponent math is performed by multiplying the base by itself
// x number of times, where x is the exponent given.

// Examples:

// power(2, 2) => 4
// power(2, 4) => 16
// power(5, 2) => 25
// power(10, 3) => 1000


let placeStuff = 1
var power = function(base, exponent) {
    // create if else statement and put in recursive function call
    // set condition to run function again if true
    if (exponent > 0) {
        placeStuff = placeStuff * base
    
      return power(base, exponent -1)
    } else {
      let returnValue = placeStuff
      placeStuff = 1
      return returnValue
    }
  
  };

