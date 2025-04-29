const array = [1, 2, 3, 4, 1, 2, 3, 4];
const k = 3;

function duplicateFunc(arr, d) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k && (j + i) < n; j++) {
      const c = i + j;

      if(arr[i]==arr[c]) {
        return true;
      }
    }
  }
  return false
}

console.log(duplicateFunc(array, k) ? "Yes" : "No");
