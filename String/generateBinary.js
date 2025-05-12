function generateBinaryStringsIterative(pattern) {
  let result = [];
  let queue = [pattern];
    console.log(queue)
  while (queue.length > 0) {
    let current = queue.shift();

    let index = current.indexOf('?');
    if (index === -1) {
      result.push(current); // No '?' left, it's a valid binary string
    } else {
      // Replace '?' with '0' and '1' and enqueue both
      let zeroVersion = current.slice(0, index) + '0' + current.slice(index + 1);
      let oneVersion = current.slice(0, index) + '1' + current.slice(index + 1);
      queue.push(zeroVersion);
      queue.push(oneVersion);
    }
  }

  return result;
}

// Example usage:
let input = "1??0?101";
let outputs = generateBinaryStringsIterative(input);
console.log(outputs.join('\n'));
