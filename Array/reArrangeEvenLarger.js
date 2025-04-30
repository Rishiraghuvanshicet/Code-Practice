const array = [1, 2, 2, 1];

function reArrangeEven(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 == 0) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
    } else {
      if (arr[i] > arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
    }
  }
  return arr;
}

console.log(reArrangeEven([...array]));
