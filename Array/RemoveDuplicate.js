const array = [1, 2, 2, 3, 4, 4, 4, 5, 5];

const removeDuplicated = removeDuplicate(array);

// function removeDuplicate(arr){
//     const set  = new Set(arr)
//     const newArray = [...set]
//     return newArray
// }

function removeDuplicate(arr) {
  const set = new Set();
  for (let elemnet of arr) {
    set.add(elemnet);
  }
  return set;
}

console.log(removeDuplicated);
