const eqArrays = require('./eqArrays');


const assertArrayEquals = function(arr1, arr2) {


  if (eqArrays(arr1, arr2)) {

    console.log(`👽👽👽 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🥵️🥵️🥵️ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArrayEquals;