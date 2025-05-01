const array = [1, 2, 0, 3];
function findEquilibriumIndex(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let leftSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }


    let rightSum = 0;
    for (let k = n-1; k > i; k--) {
      rightSum += arr[k];
    }

    if (leftSum == rightSum) {
      return (`Index is ${i}`);
    }
  }
  return -1
}

console.log(findEquilibriumIndex(array));
