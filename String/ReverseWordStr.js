const str = "i.like.apple.very.much";

function reverseWord(str) {
  const n = str.length;
  let word = "";
  let stack = [];

  for (let i = 0; i < n; i++) {
    if (str[i] !== ".") {
      word += str[i];
    } else if (word.length > 0) {
      stack.push(word);
      word = "";
    }
  }

  if (word.length > 0) {
    stack.push(word);
  }

  return stack.reverse().join(".");
}

console.log(reverseWord(str));
