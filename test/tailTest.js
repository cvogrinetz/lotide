const assert = require('chai').assert
const tail = require('../tail');


describe('#tail', () => {

  it('should return ["Lighthouse", "Labs"] when input is ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

  it('should return [2, 3, 4, 5, 6, 7, 8, 9] when input is [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    assert.deepEqual(tail([ 1, 2, 3, 4, 5, 6, 7, 8, 9]), [ 2, 3, 4, 5, 6, 7, 8, 9])
  });
});