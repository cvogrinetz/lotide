const assertEqual = require('./assertEqual')


const findKeyByValue = function(obj, value) {
  const keys = Object.keys(obj);
  
  for(const key of keys) {
    if(obj[key] === value) {
      return key;
    }     
  }
  return undefined;
};


module.exports = findKeyByValue;



// TESTING 
// const bestTVShowsByGenre = {      
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);