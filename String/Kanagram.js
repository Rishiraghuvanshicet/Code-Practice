// const str1 = "anagram";
// const str2 = "grammar";
// const c = 3;

// function kAnagram(s1, s2, k) {
//   if (s1.length !== s2.length) return "No";

//   let feq1 = {};
//   let feq2 = {};

//   for (let i of s1) {
//     feq1[i] = (feq1[i] || 0) + 1;
//   }

//   for (let i of s2) {
//     feq2[i] = (feq2[i] || 0) + 1;
//   }

//   let changedNeed = 0;

//   for (let char in feq1) {
//     if (feq1[char] > (feq2[char] || 0)) {
//       changedNeed += feq1[char] - (feq2[char] || 0);
//     }
//   }

//   return changedNeed <= k ? 'Yes' : 'No';
// }

// console.log(kAnagram(str1, str2, c));


function areKAnagrams(str1, str2, k) {
    if (str1.length !== str2.length) return "No";

    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);

    for (let i = 0; i < str1.length; i++) {
        freq1[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq2[str2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let changesNeeded = 0;
    for (let i = 0; i < 26; i++) {
        if (freq1[i] > freq2[i]) {
            changesNeeded += freq1[i] - freq2[i];
        }
    }

    return changesNeeded <= k ? "Yes" : "No";
}

// Test cases
console.log(areKAnagrams("anagram", "grammar", 3)); 
console.log(areKAnagrams("geeks", "eggkf", 1));    
