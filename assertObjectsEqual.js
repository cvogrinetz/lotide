const eqArrays = function (arr1, arr2) {

  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else {
    return false;
  }
};

const eqObjects = function (obj1, obj2) {

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }


  for (let key in obj1) {
    if (Array.isArray(obj1[key])) {
      return eqArrays(obj1[key], obj2[key]);
    } else if (obj2[key] === undefined) {

      return false;
    } else if (obj1[key] !== obj2[key]) {

      return false;
    }
  }

  return true;
};


// THIS IS THE ASSERT OBJECT EQUALS FUNCTION

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`👽👽👽 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🥵️🥵️🥵️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



// // TESTING
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba), true; // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false
