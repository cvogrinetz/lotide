const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👽👽👽 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵️🥵️🥵️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// these are used to test above function
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual('string', 'string');
//assertEqual('oldString', 'newString');
//assertEqual(5, 5);
//assertEqual(9, 8);