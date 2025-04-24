const array = [10, 4, 3, 50, 23, 90];

function thirdLargest(arr) {
  let largest = 0;
  let second = 0;
  let third = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      third = second;
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third && arr[i] !== second) {
      third = arr[i];
    }
  }
  return third
}

console.log(thirdLargest(array));
