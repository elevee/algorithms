// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//iterative
function fib(n) {
    if(n === 0) return 0; 
    if(n === 1) return 1;
    let total = 0;
    let list = [0,1];
    let current;
    for(let i=2; i<=n; i++){
      current = list.slice(-2)[0] + list.slice(-1)[0];
      list.push(current);
      // console.log(`current is ${current}`);
      if(i === n){
        return current;
      }
    }
}

//recursive
function fib(n) {
    if(n < 2) return n; 
    return fib(n-1) + fib(n-2);
}

//recursive with memoized generic function (usable on any function)
function memoize(fn){
    const memo = {};
    return function(...args){
      if(memo[args]){
        return memo[args];
      }
      const result = fn.apply(this, args);
      console.log("Args: "+args);
      memo[args] = result;
      return result;
    }
  }
  
  function fib(n) {
    if(n < 2) return n; 
    return fib(n-1) + fib(n-2);
  }
  
  // reassigning memoized version to the fib binding so the recursive calls
  // actually call the correct, memoized fib function (and not the other one)
  fib = memoize(fib);
//   fib(10);

module.exports = fib;
