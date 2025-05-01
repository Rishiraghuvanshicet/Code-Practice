const array = [-1, 10, 20];
const k = 2;

function concatenation(arr, n) {
  const newArray = [];
  
  for (let k = 0; k < n; k++) {
    newArray.push(...arr)
  }
  console.log(newArray)
 let maxSum =0;
  for(let i = 0 ;i<newArray.length;i++){
    let currentSum = 0;
    for(let j=i;j<newArray.length;j++){
        currentSum +=newArray[j];
        if(currentSum > maxSum){
            maxSum = currentSum
        }
    }
  }
  return maxSum;
}

console.log(concatenation(array, k));
