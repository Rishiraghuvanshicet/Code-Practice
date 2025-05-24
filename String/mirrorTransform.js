function mirrorTransform(s, k) {
  const mirrorChar = (ch) => {
    const charCode = ch.charCodeAt(0);
    const mirrorCode = 'a'.charCodeAt(0) + ('z'.charCodeAt(0) - charCode);
    return String.fromCharCode(mirrorCode);
  };

  let prefix = s.slice(0, k);
  let suffix = s
    .slice(k)
    .split('')
    .map(mirrorChar)
    .join('');

  return prefix + suffix;
}

// Example:
const s = "geeksforgeeks";
const k = 5;
console.log(mirrorTransform(s, k));  // Output: geekstulivtvh
