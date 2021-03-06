const countLetters = function(string) {
  let numOfLetters = {};
  string = string.split(' ').join('');

  for(let i = 0; i < string.length; i++) {
    if(numOfLetters[string[i]]) {      // this checks if there is a key value in the empty object above called numOfLetters.  
      numOfLetters[string[i]] += 1;    // numOfLetters[string[i]] CREATES a key value with the index given with the loop 
    } else numOfLetters[string[i]] = 1; // IF there is already a key the value of the key value will increase by 1
  }                                     // IF there IS NOT A KEY VALUE the else statement will then add the key AND the value of 1
  return numOfLetters;
}; 



module.exports = countLetters;

//TESTING
//  console.log(countLetters("Hello testing testing"))