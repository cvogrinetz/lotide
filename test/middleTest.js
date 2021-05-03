const assert = require('chai').assert;
const middle = require('../middle');


describe('#Middle', () => {

  it('should return [2] if input is [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return [3, 4] if input is [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });
});