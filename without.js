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

const without = function(source, itemsToRemove) {
  let newArr = source;

  for(let i = 0; i < source.length; i++) {
    for(let j = 0; j < itemsToRemove.length; j++) {
      if(source[i] === itemsToRemove[j]) {
        newArr.splice(i, 1)
        return newArr;
      }
    }   
  }
  return newArr;
};  

// USED TO TEST ABOVE FUNCTION
//assertArrayEquals(without([1, 2, 3], [1])[2, 3]) // => [2, 3]
//assertArrayEquals(without(["1", "2", "3"], [1, 2, "3"])[1, 2]) // => ["1", "2"]