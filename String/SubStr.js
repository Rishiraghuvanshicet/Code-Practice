const s = "abc";

function subStr(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <=str.length; j++) {
      newArr.push(str.slice(i, j));
    }
  }
  return newArr;
}

console.log(subStr(s));
