//function memoization -------------------------------------------------------------------------------------------------------------------
const memoizedFunction = (fn) => {
  const cash = {};
  return function (n) {
    if (cash[n]) {
      console.log("Previously counted result: " + cash[n]);
      return cash[n];
    }
    let result = fn(n);
    cash[n] = result;
    return result;
  };
};
const fibonacci = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
const memoizedFibonacci = memoizedFunction(fibonacci);
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));
