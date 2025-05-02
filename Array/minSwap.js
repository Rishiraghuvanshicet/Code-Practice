const array = [10, 19, 6, 3, 5];

function minSwap(arr) {
  const sortedArray = [...arr].sort((a, b) => a - b);
  let swap = 0;
  console.log(arr);
  console.log(sortedArray);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArray[i]) {
      swap++;

      let correctIdx = arr.indexOf(sortedArray[i]);

      let temp = arr[correctIdx];
      arr[correctIdx] = arr[i];
      arr[i] = temp;
    }
  }
  return swap;
}

console.log(minSwap(array));
