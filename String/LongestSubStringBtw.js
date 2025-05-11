function longestSubstringBetweenDuplicates(str) {
  let firstIndex = {};
  let lastIndex = {};
  let maxLen = -1;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (!(ch in firstIndex)) {
      firstIndex[ch] = i;
    }
    lastIndex[ch] = i;
  }

  for (let ch in firstIndex) {
    if (lastIndex[ch] !== firstIndex[ch]) {
      let length = lastIndex[ch] - firstIndex[ch] - 1;
      maxLen = Math.max(maxLen, length);
    }
  }

  return maxLen;
}


const s = "accabbacc";
console.log(longestSubstringBetweenDuplicates(s)); 
