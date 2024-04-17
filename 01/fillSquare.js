const fillSquare = (arr) => {
  if (arr.length === 1 && arr[0].length <= 1) {
    return arr;
  }
  const newArr = arr.map((element) => {
    const newElement = element.map((subElement) => subElement);
    return newElement;
  });

  let size = 0;
  newArr.forEach((subArray) => {
    if (subArray.length > size) {
      size = subArray.length;
    }
  });

  const nullArray = new Array(size).fill(null);
  const result = [];

  for (let i = 0; i < size; i++) {
    if (newArr[i]) {
      result.push(newArr[i]);
    } else {
      result.push(nullArray);
    }
    if (result[i].length < size) {
      for (let j = result[i].length; j < size; j++) {
        result[i].push(null);
      }
    }
  }
  return result;
};

// find longest subarray
// fill out square with that size

module.exports = { fillSquare };

/*
The function fillSquare should take an array of arrays and should complete 
these arrays so that they are a square matrix with the value null standing 
in for any blank positions. If extra sub-arrays are needed to complete the 
square, these should be added at the bottom of the matrix.

Example
Here, to complete a 3 * 3 square we need to fill up the last two sub arrays 
with null.

const square = [[1, 2, 3], [1, 2], [1]]

fillSquare(square)

  [
    [1, 2, 3],
    [1, 2, null],
    [1, null, null]
  ]


*/
