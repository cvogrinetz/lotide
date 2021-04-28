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

// THIS IS THE WITHOUT FUNCTION

const without = function (source, itemsToRemoved) {
  let newArray = source;
  for (let i = 0; i < itemsToRemoved.length; i++) {
    newArray = newArray.filter(function(items) {
      return items !== itemsToRemoved[i];
    })
  }
  console.log(newArray)
  return newArray;
};


// USED TO TEST ABOVE FUNCTION
assertArrayEquals(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
assertArrayEquals(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]) // => ["1", "2"]