// const assertEqual = require('./assertEqual');



const findKey = (obj, callback) => {
  for(let element in obj) {
    if(callback(obj[element])) {
      return element;
    }
  }
};


module.exports = findKey;

// TO TEST ABOVE CODE

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), 'noma') // => "noma"

// assertEqual(findKey({
//   isDog: false,
//   isCat: false,
//   isFish: true
// }, element => element === true), 'isFish') // => 'isFish

// assertEqual(findKey({
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// }, element => element === 50), 'age'); // => age