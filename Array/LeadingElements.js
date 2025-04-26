const array = [16,17,4,3,5,2]

const NewFunc = function (arr){
    
    let result = [];

    for(let i =0;i<arr.length;i++){
        let  j;
        for( j = i+1;j<arr.length;j++){
            if(arr[i] < arr[j]){
                break;
            }
        }
        if(j === arr.length){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(NewFunc(array)); // [17, 5, 2]  
