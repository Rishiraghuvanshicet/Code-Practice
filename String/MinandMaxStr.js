function findMinMaxWords(str) {
  const words = str.split(" ");

  let minWord = words[0];
  let maxWord = words[0];

  for (let word of words) {
    if (word.length < minWord.length) {
      minWord = word;
    }
    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }

  console.log("Minimum length word:", minWord);
  console.log("Maximum length word:", maxWord);
}

// Test examples
findMinMaxWords("This is a test string");
console.log("");
findMinMaxWords("GeeksforGeeks A computer Science portal for Geeks");
