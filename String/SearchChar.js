const str = "geeksforgeeks"
const ch = "k"

function searchChr(s,k){
    for(let i =0;i<s.length-1;i++){
        if(s[i] === k){
            return `Index of ${k} is ${i}`
        }
    }
    return -1
}

console.log(searchChr(str,ch))