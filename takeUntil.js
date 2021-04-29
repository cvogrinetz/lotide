// loop through the array using a for loop
//return the removed elements
//elements are taken until call back returns false



const takeUntil = (array, callback) => {
  let newArray = [];
  for (const element of array) {
    if (callback(element)) {
      return newArray;
    } else {
      newArray.push(element);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);