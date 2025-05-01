const array = [10, 90, 49, 2, 1, 5, 23];

function sortInWave(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}
console.log(sortInWave(array));
