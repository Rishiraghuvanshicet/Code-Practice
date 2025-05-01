const array = [2, 3, -8, 7, -1, 2, 3];

const maxSumOfSubArray = (arr) => {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }
    return maxSum;
}

console.log(maxSumOfSubArray(array));