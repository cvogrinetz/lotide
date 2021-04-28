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



// THIS IS THE LETTER POSITION FUNCTION

const letterPositions = function(sentence) {
  const result = {};
  sentence = sentence.split(' ').join('');

  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]]) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [];
      result[sentence[i]].push(i);
    }
  }
  return result;
};





//console.log(letterPositions("lighthouse in the house"));
//console.log(sentence.indexOf(i))
//assertArrayEquals(letterPositions("hello").e, [1]);


// make a function that returns an object
// key value will be letter
// value will be an array of the indices where that letter is
