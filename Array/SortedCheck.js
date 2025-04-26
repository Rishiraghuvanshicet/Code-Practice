const array = [20, 21, 45, 89, 89,2, 90];

function sortCheck(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] < arr[i] ) {
      return false;
    }
  }

  return true;
}
console.log(sortCheck(array));
