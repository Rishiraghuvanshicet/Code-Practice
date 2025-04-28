const array = [1, 2, 0, 4, 3, 0, 5, 0];

function moveToZeroToEnd(arr) {
  const newArray = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArray.push(arr[i]);
      count++;
    }
  }
  for (let j = 0; j < count; j++) {
    newArray.push(0);
  }

  return newArray;
}

console.log(moveToZeroToEnd(array));
