const tail = function(arr) {
  let newArr = [];

  newArr = arr.slice(1, arr.length);
  return newArr;
};

module.exports = tail;