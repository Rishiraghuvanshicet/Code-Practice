function check(part) {
  if (part.length > 3) return false;
  if (part.length > 1 && part[0] === "0") return false;

  for (let i = 0; i < part.length; i++) {
    if (!(part[i] >= "0" && part[i] <= "9")) {
      return false;
    }
  }
  const x = parseInt(part);
  return x >= 0 && x <= 255;
}

function valid(s) {
  const parts = s.split(".");

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ".") {
      count++;
    }
  }
  if (count !== 3) {
    return false;
  }

  for (let y = 0; y < parts.length; y++) {
    if (!check(parts[y])) {
      return false;
    }
  }
  return true;
}

console.log(valid("128.0.0.1") ? "yes" : "no");
console.log(valid("128.555.0.1") ? "yes" : "no");
