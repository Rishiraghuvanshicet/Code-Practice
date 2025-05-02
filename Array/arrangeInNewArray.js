const array = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]


function modifyArray(arr) {
    let n = arr.length;
    let vec = new Array(n).fill(-1);
    
    for (let i = 0; i < n; i++) {
        if (arr[i] !== -1) {
            vec[arr[i]] = arr[i];
        }
    }
    
    for (let i = 0; i < n; i++) {
        arr[i] = vec[i];
    }
    
    return arr;
}
 

 
modifyArray(array);
 
console.log(array.join(" "));