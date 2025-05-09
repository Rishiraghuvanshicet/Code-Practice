const input = "The quick brown fox jumps over the lazy dog";

function isPangram(s) {
  s = s.toLowerCase();
  const set = new Set();

  for (let char of s) {
    if (char >= "a" && char <= "z") {
      set.add(char);
    }
  }

  return set.size === 26;
}

console.log(isPangram(input)); 
