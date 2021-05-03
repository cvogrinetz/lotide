const assertArrayEquals = require('./assertArrayEqual');


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


module.exports = letterPositions;


console.log(letterPositions("lighthouse in the house"));
assertArrayEquals(letterPositions("hello").e, [1]);