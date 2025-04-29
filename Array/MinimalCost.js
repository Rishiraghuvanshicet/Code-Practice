const array = [4, 3, 2];

function MinimalCost(arr) {
  const n = arr.length;

  return (n - 1) * Math.min(...arr);
}

console.log(MinimalCost(array));
