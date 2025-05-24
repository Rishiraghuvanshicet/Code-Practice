function areRotations(s1, s2) {
  let n = s1.length;

  for (let i = 0; i < n; i++) {
    if (s1 === s2) {
      return true;
    }
    let last = s1[s1.length - 1];
    s1 = last + s1.slice(0, s1.length - 1);
  }
  return false;
}

let s1 = "aab";
let s2 = "aba";

console.log(areRotations(s1, s2) ? "true" : "false");

function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}
isRotation("abcde", "cdeab");
