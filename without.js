// const assertArrayEquals = require('./assertArrayEqual')


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


module.exports = without;

// USED TO TEST ABOVE FUNCTION
// assertArrayEquals(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
// assertArrayEquals(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]) // => ["1", "2"]