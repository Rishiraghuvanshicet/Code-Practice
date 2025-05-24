const str1 = "abc";
const str2 = "abc";

function checkTwoStrAreSame(s1, s2) {
  const n1 = s1.length - 1;
 

  for (let i = 0; i < n1; i++) {
    if (s1[i] !== s2[i]) {
      return false;
    }
  }
  return true;
}

const value = checkTwoStrAreSame(str1, str2) ? "same" : "not Same";
console.log(value);
