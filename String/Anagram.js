const s1 = "geeks";
const s2 = "kseeg";

function anagram(str1, str2) {
  const newArray = new Array(26).fill(0);

  for (let i of str1) {
    let el = i.charCodeAt(0) - "a".charCodeAt(0);
    newArray[el] += 1;
  }

  for (let z of str2) {
    let el = z.charCodeAt(0) - "a".charCodeAt(0);
    newArray[el] -= 1;
  }

  for (let y of newArray) {
    if (y !== 0) {
      return false;
    }
  }
  return true;
}

console.log(anagram(s1, s2));
