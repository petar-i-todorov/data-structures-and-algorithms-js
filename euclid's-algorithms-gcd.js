//Euclid's algorithm for finding GCD of 2 numbers (without recursion)
const GCD = (num1, num2) => {
  while (num1 !== num2) {
    let max = num1 > num2 ? num1 : num2;
    let min = num1 > num2 ? num2 : num1;
    max -= min;
    num1 = max;
    num2 = min;
  }
  return num1;
};

//with recursion
function gcdSimple(a, b) {
  if (a === b) return b;
  const max = a > b ? a : b;
  const min = a > b ? b : a;
  return gcdSimple(min, max - min);
}

//with recursion - best complexity version - O(const)
function gcd(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
