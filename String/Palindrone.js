const s = "abfdba"

function palindrone(str){
    let left = 0;
    let right = str.length-1;

    while(left < right){
        if(str[left] == str[right]){
            left++;
            right--;
        }else{
            return false
        }
    }
    return true
}
const isPalindrone = palindrone(s) ? "isPaalindrone":"not-a-Palindrone"
console.log(isPalindrone)