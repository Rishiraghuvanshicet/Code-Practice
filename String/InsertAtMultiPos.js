const str = "geeksforgeeks";
const chars = [1, 5, 7, 9];

function insertAtMultiPos(s, ch) {
  const newArray = [];
  let pointer = 0;

  for (let i = 0; i < s.length ; i++) {
    if (pointer < ch.length && i == ch[pointer]) {
      newArray.push("*");
      pointer++;
    }
    newArray.push(s[i]);
  }
  return newArray.join("");
}

console.log(insertAtMultiPos(str, chars));
