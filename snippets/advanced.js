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

// 2. memory leak
// JavaScript completes garbage collection with a mark and sweep method.

var person = {
  first: "Brittney",
  last: "Postma",
};

person = "Brittney Postma";

// By changing the variable person from an object to a string, it leaves the values of first and last in the memory heap and does not remove it.

// 3. concurrency and the event loop

console.log("1");
// goes on call stack and runs 1
setTimeout(() => {
  console.log("2"), 1000;
});
// gets sent to web api
// web api waits 1 sec, runs and sends to callback queue
// the javascript engine keeps going
console.log("3");
// goes on call stack and runs 3
// event loop keeps checking and see call stack is empty
// event loop sends calback queue into call stack
// 2 is now ran

// 1
// 3
// 2

// Example with 0 second timeout

console.log("1");
setTimeout(() => {
  console.log("2"), 0;
});
console.log("3");

// 1
// 3
// 2

// Still has the same output

// 4. Job Queue

// The job queue or microtask queue came about with promises in ES6.
// With promises we needed another callback queue that would give higher priority to promise calls.
// The JavaScript engine is going to check the job queue before the callback queue.

// 1 Callback Queue ~ Task Queue
setTimeout(() => {
  console.log("1", "is the loneliest number");
}, 0);
setTimeout(() => {
  console.log("2", "can be as bad as one");
}, 10);

// 2 Job Queue ~ Microtask Queue
Promise.resolve("hi").then((data) => console.log("2", data));

// 3
console.log("3", "is a crowd");

// 3 is a crowd
// 2 hi
// undefined Promise resolved
// 1 is the loneliest number
// 2 can be as bad as one
