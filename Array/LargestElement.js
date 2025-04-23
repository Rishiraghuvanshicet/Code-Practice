const array = [20, 10, 3320, 432, 100];

function findLargest(arr) {
  let largest = 0;
  for (let i of arr) {
    if(i > largest){
        largest = i;
    }
  }
  return largest
}

console.log(findLargest(array));
