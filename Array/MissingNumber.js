const array = [8, 2, 4, 5, 3, 7, 1];

function findMissingNumber(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] + 1 !== sortedArray[i + 1]) {
      return sortedArray[i] + 1;
    }
  }
}

console.log(findMissingNumber(array));
