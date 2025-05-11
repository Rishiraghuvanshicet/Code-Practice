const s = "geeksforgeeks";

function duplicate(str) {
  if (s.length === 1) return "No";

  let obj = {};
  let result =[];

  for (let i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }
  
  for (let it in obj) {
    if (obj[it] > 1) {
           result.push(`${it}, count = ${obj[it]}`);
    }
  }
  return result.join("\n")
}

console.log(duplicate(s));
