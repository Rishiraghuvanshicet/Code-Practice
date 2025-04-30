const array = [4, 3, 6, 2, 1, 1];

function FindMissingAndRepeating(arr){

    let repeating = 0;
    let missing = 0;


    const newArray = new Array(arr.length + 1).fill(0);

    for (let i = 1; i < arr.length; i++) {
        newArray[arr[i]]++;
    }

    for(let j = 1; j < arr.length; j++){
        if (newArray[j] === 0) {
            missing = j;
        } else if (newArray[j] > 1) {
            repeating = j;
        }
    }
    return[repeating,missing]
}

console.log(FindMissingAndRepeating(array)); 
