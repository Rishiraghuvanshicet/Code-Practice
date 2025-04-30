const array = [1, 2, 3];

function subArraySum(arr) {
  let totalSub = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let c = i; c <= j; c++) {
        totalSub += arr[c];
      }
    }
  }
  return totalSub;
}

console.log(subArraySum(array));
