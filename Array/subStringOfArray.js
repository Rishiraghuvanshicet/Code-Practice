const array = [1, 2, 3];

function subArrays(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        let subArray = [];
      for (let k = i; k <= j; k++) {
        subArray.push(arr[k]);
      }
        result.push(subArray);
    }
  }
  return result
}

// function subArrays(arr) {
//     let result = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       let subArray = [];
//       for (let j = i; j < arr.length; j++) {
//         subArray.push(arr[j]);
//         result.push([...subArray]); // Make a copy
//       }
//     }
  
//     return result;
//   }



console.log(subArrays(array));
