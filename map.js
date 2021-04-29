const eqArrays = function(arr1, arr2) {

  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log("True");
    return true;
  } else {
    console.log("False");
    return false;
  }
};

const assertArrayEquals = function(arr1, arr2) {

  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(`👽👽👽 Assertion Passed: ${arr1} === ${arr2}`);
    return true;
  } else {
    console.log(`🥵️🥵️🥵️ Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }
};

// THIS IS THE MAP FUNCTION

const map = (arr, func) => {
  const result = [];
  for(let item of arr) {
    result.push(func(item));
  }
  return result;
};


// USED TO TEST MAP FUNCTION

// const words = ["ground", "control", "to", "major", "tom"];
// const numbers = [1, 2, 3, 4, 5];
// const bool = [true, true, false]

// const results1 = map(words, word => word[0]);
//  console.log(results1);

// const results2 = map(words, word => word) 
// const result3 = map(numbers, number => number * 3)
// const result4 = map(bool, boo => boo = false)


// assertArrayEquals(results1, [ 'g', 'c', 't', 'm', 't' ])
// assertArrayEquals(results2, [ 'ground','control','to','major','tom' ])
// assertArrayEquals(result3, [3, 6, 9, 12, 15]); 
// assertArrayEquals(result4, [false, false, false])