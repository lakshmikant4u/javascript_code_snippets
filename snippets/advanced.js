// 1. Memoization : Memoization is a way to cache a return value of a function based on its parameters.

// Bad Way
function addTo80(n) {
  console.log("long time...");
  return n + 80;
}
addTo80(5);
addTo80(5);
addTo80(5);
// long time... 85
// long time... 85
// long time... 85
// Memoized Way
function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    // closure to access cache obj
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time...");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
const memoized = memoizedAddTo80();
console.log("1.", memoized(5));
console.log("2.", memoized(5));
console.log("3.", memoized(5));
console.log("4.", memoized(10));
// long time...
// 1. 85
// 2. 85
// 3. 85
// long time
// 4. 90
