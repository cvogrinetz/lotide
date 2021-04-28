const assertArrayEquals = function(arr1, arr2) {

  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(`👽👽👽 Assertion Passed: ${arr1} === ${arr2}`);
    return true;
  } else {
    console.log(`🥵️🥵️🥵️ Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }
};
const eqArrays = function(arr1, arr2) {

  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log("True");
    return true;
  } else {
    console.log("False");
    return false;
  }
};

// THIS IS THE MIDDLE FUNCTION

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    let midNum = array[Math.floor(array.length / 2)];
    return [midNum];
  } else if (array.length % 2 === 0) {
    let midNum2 = array[Math.floor((array.length - 1) / 2)];
    let midNum = array[Math.floor((array.length + 1) / 2)];
    return [midNum2, midNum];
  }
};


// USED TO TEST ABOVE FUNCTION
//assertArrayEquals(middle([1,2,3]), [2]);
//assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

