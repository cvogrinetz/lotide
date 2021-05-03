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




module.exports = middle;
