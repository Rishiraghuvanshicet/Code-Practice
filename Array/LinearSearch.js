const array = [1, 2, 3, 4, 5];
const toFind = 2;

function search(arr, find) {
  const length = arr.length;
  var found = "";
  for (let i = 0; i < length; i++) {
    if (arr[i] == find) {
      found += `Element ${find} is found on Index ${i}`;
    }
  }
  return found;
}

console.log(search(array, toFind));
