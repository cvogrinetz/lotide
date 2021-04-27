const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👽👽👽 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵️🥵️🥵️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = [];

  newArr = arr.slice(1, arr.length);
  return newArr;
};

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words);
//assertEqual(words.length, 3);