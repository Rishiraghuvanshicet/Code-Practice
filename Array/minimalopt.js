const array = [4, 7, 19, 16];
const k = 3;

function MinimalOpt(arr, n) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let res = 0;
  for (let j = 0; j < arr.length; j++) {
    if ((max - arr[j]) % n !== 0) {
      return -1;
    } else {
      res += (max - arr[j]) / k;
    }
  }
  return res;
}

console.log(MinimalOpt(array, k));
