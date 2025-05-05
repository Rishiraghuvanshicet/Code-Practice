function removeAllOccurrencesLoop(s, c) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== c) {
        result += s[i];
      }
    }
    return result;
  }

console.log(removeAllOccurrencesLoop("geeksforgeeks", 'e')); 
