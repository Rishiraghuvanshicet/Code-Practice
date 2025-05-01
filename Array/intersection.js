function intersectionSortedArrays(a, b) {
  // Create sets from the input arrays
  const setA = new Set(a);
  const setB = new Set(b);

  const result = [];

  // Loop through setA and check if element exists in setB
  for (let item of setA) {
    if (setB.has(item)) {
      result.push(item);
    }
  }

  // Sort the result before returning
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        let temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }

  return result;
}


console.log(intersectionSortedArrays([1, 1, 2, 2, 2, 4], [2, 2, 4, 4])); 
console.log(intersectionSortedArrays([1, 2], [3, 4]));
