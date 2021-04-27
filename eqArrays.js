const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👽👽👽 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵️🥵️🥵️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// make a function to compare 2 arrays together
// should output a pass or fail when compared
// need to fix undefined return problem

const eqArrays = function(arr1, arr2) {

  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log("True");
    return true;
  } else {
    console.log("False");
    return false;
  }
};

// USED TO TEST ABOVE FUNCTION
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false

//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false