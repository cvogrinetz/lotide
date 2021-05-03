const eqArrays = function(arr1, arr2) {

  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    // console.log(`👽👽👽 Assertion Passed: ${arr1} === ${arr2}`);
    return true;
  } else {
    // console.log(`🥵️🥵️🥵️ Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }
};

// THIS IS THE EQ OBJECTS FUNCTION

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    // console.log('FALSE BECAUSE LENGTH DONT MATCH');
    return false;
  }

  for (let key in obj1) {
    if (Array.isArray(obj1[key])) {
      return eqArrays(obj1[key], obj2[key]);
    } else if (obj2[key] === undefined) {
      // console.log('FALSE BECAUSE UNDEFINED');
      return false;
    } else if (obj1[key] !== obj2[key]) {
      // console.log('FALSE BECAUSE KEYS DONT MATCH');
      return false;
    }
  }
  // console.log('TRUE');
  return true;
};





const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

