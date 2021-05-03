const middle = require('../middle');
const assertArrayEquals = require('../assertArrayEqual');



assertArrayEquals(middle([1,2,3]), [2]);
assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

