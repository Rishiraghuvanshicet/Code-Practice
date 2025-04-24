const array = [12, 35, 1, 10, 34, 1];

function secondLargest(arr) {
  let largest = 0;
  let second = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
      console.log(second);
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];
    }
  }
  return second;
}

console.log(secondLargest(array));
