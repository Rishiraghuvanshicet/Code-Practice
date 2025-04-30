const array = [100, 180, 260, 310, 40, 535, 695];

function buyAndSell(arr) {
  let totalProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      totalProfit += arr[i] - arr[i - 1];
    }
  }
  return totalProfit;
}

console.log(buyAndSell(array));
