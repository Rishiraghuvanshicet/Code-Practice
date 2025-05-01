const array1 = [1, 2, 3, 2, 1];
const array2 = [3, 2, 2, 3, 3, 2];

function union(a1, a2) {
  const set = new Set();

  for (let i = 0; i < a1.length; i++) {
    set.add(a1[i]);
  }
  for (let i = 0; i < a2.length; i++) {
    set.add(a2[i]);
  }

  const newArray = [...set]
 return newArray;
}

console.log(union(array1, array2));
