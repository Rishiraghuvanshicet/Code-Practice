const array = [3, 4, 1, 2];

function minRotateCount(arr) {
  let min = arr[0];
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if( min > arr[i]){
        min = arr[i]
        count = i
    }
  }
  return count;
}

console.log(minRotateCount(array));
