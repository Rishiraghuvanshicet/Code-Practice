const Array = [1, 2, 3, 4, 5, 6];
const d = 2;

function rotate(arr, n) {
  for (let i = 0; i < n; i++) {
    let temp = arr[0];
    for (let j = 1; j < arr.length; j++) {
      arr[j - 1] = arr[j];
    }
    arr[arr.length - 1] = temp;
  }
  return arr;
}

console.log(rotate(Array, d));
