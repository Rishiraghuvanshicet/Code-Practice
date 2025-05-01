const array = [0, -1, 2, -3, 1];
const pairSum = -2;

function sumOfPair(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        console.log(`Sum of ${arr[i]} + ${arr[j]} = ${k}`)
        return [`index is ${i}`,`index is ${j}`];
      }
    }
  }
}

console.log(sumOfPair(array, pairSum));
