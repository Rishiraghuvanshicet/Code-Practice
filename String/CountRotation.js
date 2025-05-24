function countRotation(s1, s2) {
    if (s1.length !== s2.length) return 'Not Equal';
  
    let temp = s2;
    for (let r = 0; r < s1.length; r++) {
      if (temp === s1) {
        return `After ${r} rotations`;
      }
      console.log(`1 ->${temp}`)
      temp = temp.slice(1) + temp[0]; 
      console.log(temp)
    }
    return 'Not Equal';
  }
  
  const str1 = "abcd";
  const str2 = "cdab";
  
  console.log(countRotation(str1, str2)); 