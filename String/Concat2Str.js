// let s1 = "Hello";
// let s2 = "World";
// let result = s1 + s2;
// console.log(result);  // Output: HelloWorld

// let s1 = "Good";
// let s2 = "Morning";
// let result = `${s1}${s2}`;
// console.log(result);  // Output: GoodMorning

// let s1 = "Hello";
// let s2 = "World";
// let result = s1.concat(s2);
// console.log(result);  // Output: HelloWorld

function concatenateStrings(s1, s2) {
  let result = "";

  for (let i = 0; i < s1.length; i++) {
    result += s1[i];
  }

  for (let i = 0; i < s2.length; i++) {
    result += s2[i];
  }

  return result;
}

console.log(concatenateStrings("Hello", "World")); // Output: HelloWorld
