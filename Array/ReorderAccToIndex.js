const arr= [10, 11, 12];
const index= [1, 0, 2];
var n = arr.length;

function reorder(arr, index, n) {
   const temp = new Array(n).fill(0)

    for (var i = 0; i < n; i++) {
        temp[index[i]] = arr[i];
    }

    for (var i = 0; i < n; i++) {
        arr[i] = temp[i];
        index[i] = i;
    }
}



reorder(arr, index, n);
console.log("Reordered array is:", arr);
console.log("Modified Index array is:", index);