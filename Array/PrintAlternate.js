const array = [10,20,30,40,50];

function printAlternate(arr){
    let altArray=[];

    for(let i=0;i<=arr.length;i+=2){
        altArray.push(arr[i])
    }
    return altArray
}

console.log(printAlternate(array))