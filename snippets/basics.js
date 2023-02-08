// 1. variable naming 
const firstName = "Lakshmikant";
const lastName = "Deshpande";

const assets = [
    { course: "LLD of Splitwise", type: "video", link: "https://youtu.be/I4xf4STXgmU" },
    { course: "LLD of Parking", type: "blog", link: "https://medium.com/@abhigulve06/parking-lot-low-level-design-in-java-2be46101daec" }
]

const videos = assets.filter(asset => asset.type === "video");
console.log(videos)

// 2. Loose Equality Operators

console.log([100] == 100); // true
console.log([100] === 100); // false

console.log('100' == 100); // true
console.log('100' === 100); // false

console.log([] == 0); // true
console.log([] === 0); // false

console.log('' == false); // true
console.log('' === false); // false

console.log('' == 0); // true
console.log('' === 0); // false

console.log(0 == false); // true
console.log(0 === false); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

// 3. Check if property exist in Object

const student = {
    id: 1,
    age: 12,
    standard: 6,
    name: "Raju"
};

const isAgeExist = 'age' in student;
console.log(isAgeExist); // true

const isGenderExist = 'gender' in student;
console.log(isGenderExist); // false

// 4. Conditionally add a property to an Object

const includeSalary = true;

const employee = {
    id: 1,
    name: "Shrihari",
    ...(includeSalary && { salary: 100000 })
}

console.log(employee); // { id: 1, name: 'Shrihari', salary: 100000 }

// 5. Use Array includes method to check for multiple criteria

const rgbColors = ["red", "green", "blue"];
const isRGBcolor = (color) => {
    return rgbColors.includes(color)
}

console.log(isRGBcolor("red")) // true
console.log(isRGBcolor("white")) // false

// 6. Remove duplicates from Array using Set

const numbers = [1, 2, 4, 5, 6, 3, 4, 5, 2, 3];
const colors = ["blue", "white", "orange", "red", "yellow", "white", "orange"];

const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [ 1, 2, 4, 5, 6, 3 ]

const uniqueColors = [...new Set(colors)];
console.log(uniqueColors); // [ 'blue', 'white', 'orange', 'red', 'yellow' ]

// 7. Use spread operator to shallow copy arrays and objects

const scores = [10, 40, 56, 90];
const employee2 = { id: 1, name: "Gururaj" };
const employee2Ref = employee2;
const newScores = [...scores];
const newEmployee2 = { ...employee2 };

console.log(newScores); // [ 10, 40, 56, 90 ]
console.log(newEmployee2); // { id: 1, name: 'Gururaj' }
console.log(newEmployee2 === employee2) // false (created new shallow copy) 
console.log(employee2Ref === employee2) // true (referring same object)

// 8. Avoid delete keyword rather use rest operator to create new object

const employee3 = {
    id: 3,
    name: "Sachin",
    salary: "2000000"
}

const { salary, ...employee4 } = employee3;
console.log(employee4); // { id: 3, name: 'Sachin' }

// 9. Use Array.isArray to determine the array 

let names = ["Lakshmikant", "Sanjay", "Ganesh", "Sachin"];
console.log(Array.isArray(names)); // true

let user = { id: 1, name: "Prasad" };
console.log(Array.isArray(user)); // false

let name = "Coder";
console.log(Array.isArray(name)); // false

// 9. Use of falsy bouncer A falsy value is a value that is considered false when examined as a Boolean. Falsy Bouncer means removing all falsy values from an array. 
// Falsy values in JavaScript are false, null, 0, undefined, NaN, and ""(empty string).

const numbersWithFalsyValues = [7, null, 8, 13, false, NaN];
const numbers2 = numbersWithFalsyValues.filter(Boolean);
console.log(numbers2) // [ 7, 8, 13 ]

const namesWithFalsyValues = ["Ramesh", null, "Krishna", "Pandu", false, NaN, "Giridhar", undefined];
const names2 = namesWithFalsyValues.filter(Boolean);
console.log(names2) // [ 'Ramesh', 'Krishna', 'Pandu', 'Giridhar' ]

// 10. Use Array.some to check occurrence in array

const assets2 = [
    { course: "LLD of Splitwise", type: "video", link: "https://youtu.be/I4xf4STXgmU" },
    { course: "LLD of Parking", type: "blog", link: "https://medium.com/@abhigulve06/parking-lot-low-level-design-in-java-2be46101daec" }
]

const hasVideoAsset = assets2.some(asset => asset.type === "video");
console.log(hasVideoAsset); // true

// 11. Readable numbers

const largeNumber = 35_00_00_000;
console.log(largeNumber); // 350000000

const largeNumber2 = 65e8;
console.log(largeNumber2); // 6500000000

// 12. Pass function arguments as an object

const createProduct = ({ name, price, brand }) => {
    console.log(`${brand} ${name} comes with price ${price} `)
}

createProduct({ name: "Boat Tail", price: "$28.0 Million", brand: "Rolls-Royce" }); // Rolls-Royce Boat Tail comes with price $28.0 Million 
createProduct({ name: "La Voiture Noire", price: "$13.4 Million", brand: "Bugatti" }); // Bugatti La Voiture Noire comes with price $13.4 Million 
createProduct({ name: "Sweptail", price: "$12.8 Million", brand: "Rolls-Royce" }); // Rolls-Royce Sweptail comes with price $12.8 Million 

// 13. Object destructuring on arrays

const employees = [{ name: "Lakshmikant", empId: 1 }, { name: "Dixit", empId: 2 },]

const { 0: emp1, 1: emp2 } = employees;

console.log(emp1) // { name: 'Lakshmikant', empId: 1 }
console.log(emp2) // { name: 'Dixit', empId: 2 }

// 14. Skip values in array destructuring

const scores2 = [25, 35, 45, 55, 67, 57];
const [, , ...remscores] = scores2;
console.log(remscores) // [ 45, 55, 67, 57 ]

// 15. Format the output of JSON.stringify

const dev = { id: 1, name: "Lakshmikant", city: "Hubballi", role: "Dev" };

console.log(dev) // { id: 1, name: 'Lakshmikant', city: 'Hubballi', role: 'Dev' }
console.log(JSON.stringify(dev)) // {"id":1,"name":"Lakshmikant","city":"Hubballi","role":"Dev"}
console.log(JSON.stringify(dev, null, 2))
// {
//   "id": 1,
//   "name": "Lakshmikant",
//   "city": "Hubballi",
//   "role": "Dev"
// }

// 16. Filter with JSON.stringify

const dev2 = { id: 2, name: "Sanjay", city: "Dharwad", role: "Dev", hobbies: ["Reading", "Cricket", "Movies"] };
console.log(dev2) // { id: 2, name: 'Sanjay', city: 'Dharwad', role: 'Dev', hobbies: ['Reading', 'Cricket', 'Movies']}

const filters = ["name", "city", "role"];
// 17. Power of JSON.stringify replacer parameter

const neoEmp = { name: "Lakshmikant", designation: "Solutions Architect", id: 100, salary: 50000 }

const doubleSalary = (key, value) => { return key == "salary" ? value * 2 : value }

// 18. Use of optional chaining on function call

let someFunction;
console.log(someFunction?.()); // undefined

const testFunction = () => { console.log("Test Function") }
// 19. Convert to a flat array using Array.flat

const numArr = [[2, 3, 4], 6, 7, [[8, 9]]];

const flatWithoutDepth = numArr.flat();
console.log(flatWithoutDepth) // [ 2, 3, 4, 6, 7, [ 8, 9 ] ]

const flatWithoutDepth1 = numArr.flat(1);
console.log(flatWithoutDepth1) // [ 2, 3, 4, 6, 7, [ 8, 9 ] ]

const flatWithoutDepth2 = numArr.flat(2);
console.log(flatWithoutDepth2) // [ 2, 3, 4, 6, 7, 8, 9 ]

// 20. Use console.time to debug performance

const label = "ForLoop";
console.time(label);

const list = [];
for (let i = 0; i < 250000; i++) {
    list.push(i);
}

console.log(`list.length ${list.length}`); // list.length 250000
console.timeEnd(label); // ForLoop: 50.235ms

// 21. Logging using console.group

console.group("Video");

console.log("Video uploaded..")
console.log("Video validated..")
console.log("Video published..")

console.groupEnd()

// Video 
//   Video uploaded..
//   Video validated..
//   Video published..

// 22. Conditional log message using console.assert

const neoEmp2 = { name: "Aravind", id: 2 };

console.assert(neoEmp2.salary, "Salary not defined"); // Assertion failed: Salary not defined

// 23. Display tabular data using console.table

console.table(neoEmp2);

// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │  name   │ 'Aravind' │
// │   id    │     2     │
// └─────────┴───────────┘


console.table(["Developer", "Tester", "Product Owner"]);

// ┌─────────┬─────────────────┐
// │ (index) │     Values      │
// ├─────────┼─────────────────┤
// │    0    │   'Developer'   │
// │    1    │    'Tester'     │
// │    2    │ 'Product Owner' │
// └─────────┴─────────────────┘

console.table(employees)

// ┌─────────┬───────────────┬───────┐
// │ (index) │     name      │ empId │
// ├─────────┼───────────────┼───────┤
// │    0    │ 'Lakshmikant' │   1   │
// │    1    │    'Dixit'    │   2   │
// └─────────┴───────────────┴───────┘

// 24. Default assignment for required arguments of the function

const isRequired = () => {
    throw new Error("Argument is required");
}

const setCurrentVideoCode = (videoCode = isRequired()) => {
    console.log(videoCode);
}
try {
    setCurrentVideoCode() // Error: Argument is required
} catch (error) {
    console.error(error.message)
}
setCurrentVideoCode("Swami Vivekananda Speech") // Swami Vivekananda Speech

setCurrentVideoCode("") // 

setCurrentVideoCode(null) // null


// 25. Avoid default exports
// Problems with default exports are:
// • Discoverability is very poor for default exports.
// • Difficult to analyze by automated tools or provide code autocompletion.
// • Horrible experience for CommonJS.
// • TypeScript auto -import struggles.
// • Default exports make large - scale refactoring impossible

// Export class

class UserService { }

// export { UserService }

// export default UserService; // avoid using this 

// Import class

// import { UserService } from './' // user service locn

// 26. Use of object destructuring

const emp3 = { name1: "Bhargav", id1: 5 }
const { id1, name1 } = emp3;

console.log(id1, name1);

const emp5 = { name2: "Bhagat", id2: 6 }
let id2, name2;


({ id2, name2 } = emp5)
// 27. Lock an object using the Object.freeze

const emp6 = {
    name: "Vishnu",
    id: 6
}

Object.freeze(emp6);

emp6.name = "Raj"; // Throws error when "use strict" is used

// 28. Understanding of closures

// A closure is a mechanism that allows the inner function to remember the outer scope variables when it was defined,
//     even after the outer function has returned.
// The closure has three scope chains:
//     • It can access its own scope means variables
//     defined between its curly brackets({}).
//     • It can access the outer function’s variables.
//     • It can access the global variables.

const outer = () => {
    let message = "This is in outer func scope";
    const inner = () => {
        console.log(message);
    }
    return inner;
}

let innerFunc = outer();
innerFunc(); // This is in outer func scope

// 29. Smooth scroll to a specific element

// 30. Use Object.entries to access key and value

const emp7 = {
    name: "Akshay",
    id: 7
}

Object.entries(emp7).forEach(([key, value]) => {
    console.log(`key : ${key} value : ${value}`);
})
// key: name value: Akshay
// key: id value: 7

// 31. Use of nullish coalescing operator with numbers

let num1 = 0;
let num2;

let defaultNum1 = num1 ?? 1;
let defaultNum2 = num2 ?? 2;

console.log(`defaultNum1 : ${defaultNum1} defaultNum2 : ${defaultNum2}`) // defaultNum1 : 0 defaultNum2 : 2

// 32. Ways of a function declaration

// Function Declaration
function getVideo(videoId) {
    return { id: videoId, title: `Video-${videoId}` }
}

// Function Expression
const getVideo2 = function (videoId) {
    return { id: videoId, title: `Video-${videoId}` }
}

// Arrow => Function
const getVideo3 = (videoId) => {
    return { id: videoId, title: `Video-${videoId}` }
}

// Arrow => Function withou curly braces
const getVideo4 = videoId => ({ id: videoId, title: `Video-${videoId}` })
const getModulusOfTen = value => value % 10;

// 33. Destructuring Object - 2

const person = {
    firstName: "Lakshmikant",
    lastName: "D",
    age: 30,
    sex: "M"
}

const { firstName: first, age, city = "Bengaluru" } = person;

function joinFirstLastName({ firstName, lastName }) { // we create firstName and lastName variables by destructuring person parameter
    return firstName + '-' + lastName;
}

const joinFirstLastName2 = ({ firstName, lastName }) => firstName + '-' + lastName;
console.log(joinFirstLastName2(person)); // Lakshmikant-D

// 34. Spread operator "..."
// The spread operator ... has been introduced with ES2015 and is used to expand elements of an iterable(like an array)
// into places where multiple elements can fit.

const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d", "e", "f"];
console.log(arr2); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

function myFunc(x, y, ...params) {
    console.log(`x : ${x}, y : ${y}, params : ${params}`); // x : a, y : b, params : c,d,e,f
}

const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

const n = { x, y, ...z };
// 35. A reliable way of checking if variable is an object

let game = null;
console.log(typeof game === "object");  // logs true! the surprising gotcha in JavaScript is that null is also considered an object!

console.log((game !== null) && (typeof game === "object"));  // logs false hence can add null check to see if variable is an object!

console.log((game !== null) && ((typeof game === "object") || (typeof game === "function"))); // logs false this check if game is object or functions

console.log((game !== null) && (typeof game === "object") && (toString.call(game) !== "[object Array]")); // this returns falls if the object is an Array

console.log((game !== null) && (game.constructor === Object)); // returns false for nulls, arrays, and functions, but true for objects

let games = ["Football", "Cricket"]

// 36. code snippet 

let demo1 = () => {
    var a = b = 3;
};
demo1();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// var a = b = 3; is actually shorthand for: 
// b = 3;
// var a = b; hence 'b' becomes global variable and 'a' becomes local to demo1 method

// 37. Deep Cloning Objects in JavaScript, the Modern Way - structuredClone 
// https://simonplend.com/deep-clone-values-with-structuredclone/
// https://www.builder.io/blog/structured-clone

const player = {
    name: "Messi",
    game: "Football",
    worldcup_played: [2006, 2010, 2014, 2018, 2022]
}

const clonedPlayer = structuredClone(player) // supported Node Version
console.log(clonedPlayer === player); // false

// 38. operator precedence == greater than +

// 39. event loop - https://javascript.info/settimeout-setinterval

let eveLoop = () => {
    console.log(1);
    setTimeout(function () { console.log(2) }, 1000);
    setTimeout(function () { console.log(3) }, 0);
    console.log(4);
};

// 40. function to check if String is Palindrome
// Regex ref - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// \W means "non-word" - The RegExp \W Metacharacter in JavaScript is used to find the nonword character 
// i.e. characters which are not from a to z, A to Z, 0 to 9. It is the same as [^a-zA-Z0-9]. 
// https://www.geeksforgeeks.org/javascript-regexp-w-metacharacter/

// / mark the beginning and end of a regular expression.
// g means it's a global search.
// https://www.programiz.com/javascript/regex

let isPalindrome = (str) => {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'

// 41. function to add digits of a number till it becomes single digit

const addDigits = (num) => {
    let x = Array.from(String(num), Number)
    let y = x.reduce((a, c) => a + c);
    return y.toString().length > 1 ? addDigits(y) : y
};

// 42. Function rest parameter

function myFunc() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

myFunc("Nick", "Anderson", 10, 12, 6);
// "Nick"
// "Anderson"
// 10
// 12
// 6

// 43. Object as a Key

let a = {}, b = { key: 'b' }, c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456
// When setting an object property, JavaScript will implicitly stringify the parameter value.
// In this case, since b and c are both objects, they will both be converted to "[object Object]".
// As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably.
// Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].

// 44. Different ways to make an Array empty

let items = ["tea", "coffee", "milk"];
let copy = items;

copy[2] = "oranges";
console.log(items); // ['tea', 'coffee', 'oranges']
console.log(copy); // ['tea', 'coffee', 'oranges']

items = [];

// The items array is empty but copy still contains the original array and it’s not cleared.
console.log(items); // []
console.log(copy); // ['tea', 'coffee', 'oranges']

// a. Set length of the array to 0 to make original Array empty

let colours = ["white", "blue", "red", "cream"];
let copyColours = colours;

console.log(colours); // []
console.log(copyColours); // []

colours.length = 0;
console.log(colours); // []
console.log(copyColours); // []

// b. Use array splice method

let cities = ["Hubli", "Dharwad", "Bijapur", "Bengaluru"];
let citiesCopy = cities;
console.log(cities); // [ 'Hubli', 'Dharwad', 'Bijapur', 'Bengaluru' ]
console.log(citiesCopy); // [ 'Hubli', 'Dharwad', 'Bijapur', 'Bengaluru' ]
// remove elements of items array starting from position 0 till length of array
cities.splice(0, cities.length);
// 45. Object Reference

let obj = { name: 'Lakshmikant' };
let newObj = obj;
console.log(obj); // { name: 'Lakshmikant' }
console.log(newObj); // { name: 'Lakshmikant' }
obj = null;
// 46. call() method

let displayPlayer = function () {
    return "Hi " + this.name;
}
let cricketPlayer = {
    name: "Virender Sehwag",
    place: "Delhi",
    getDetails: function (playerType) {
        return `Cricketer is ${this.name} from ${this.place}  ${playerType ? `and he is ${playerType}` : ''}`
    }
};

console.log(displayPlayer.call(cricketPlayer)); // Hi Virender Sehwag	

let displayPlayerFatArrow = () => {
    return "Hi " + this.name;
}

// This doesn't work with fat arrow operator, The reason being Arrow function doesn't have 'this' of their own.
// https://ishwar-rimal.medium.com/call-bind-and-apply-with-arrow-function-in-javascript-4e614456d5f5 
console.log(displayPlayerFatArrow.call(cricketPlayer)); // Hi undefined	

let cricketPlayer2 = {
    name: "Rahul Dravid",
    place: "Bengaluru"
}

// use getDetails method from cricketPlayer obj by passing cricketPlayer2 in call
console.log(cricketPlayer.getDetails.call(cricketPlayer2)); // Cricketer is Rahul Dravid from Bengaluru

// call with parameters
// 47. apply() method is same as call() but takes argument as Array

console.log(cricketPlayer.getDetails.apply(cricketPlayer2, ["Batsman"])); // Cricketer is Rahul Dravid from Bengaluru  and he is Batsman

console.log(cricketPlayer2.runsScored.apply(cricketPlayer, [3413, 3434, 1323])); // 8170

// 48. bind() method
const scientist = {
    firstName: "Sir Chandrasekhara",
    lastName: "Raman",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const scientist2 = {
    firstName: "Home Jehangir",
    lastName: "Bhabha",
}
console.log(scientist.fullName()) // Sir Chandrasekhara Raman
let scientist2FN = scientist.fullName.bind(scientist2);
console.log(scientist2FN()); // Home Jehangir Bhabha

// 49. calback functions

function sayHello(name) {
  console.log("Hello " + name);
}

function greetPerson(callback) {
  let name = "Lakshmikant";
  callback(name);
}

// 50. filter with Boolean class

const compact = (arr) => console.log(arr.filter(Boolean));
// 51. code snippet of variable hosting

var temp1 = 1;
function outer2() {
  var temp1 = 2;
  function inner2() {
    temp1++;
    var temp1 = 3;
    console.log(temp1);
  }
  inner2();
}
outer2(); // 3

// 52. code snippet of variable hosting
var temp2 = 21;
var girl = function () {
  console.log(temp2);
  var temp2 = 20;
};
girl(); // undefined

// 53. code snippet of settimeout

let temp3 = true;
let count = 0;
setTimeout(() => {
  temp3 = false;
}, 2000);
setInterval(() => {
  if (temp3) {
    console.log(count++);
  }
}, 200);

// 54. Mutability

let text = "abcde";
text[1] = "z";
console.log(text); //ans: abcde

const arr = [1, 2, 3];
arr.length = 0;
console.log(arr); //ans: []

// 55. Block Scope & Shadowing in JS

{
 var tempa = 10;
 let tempb = 20;
 const tempc = 30;
 // Here let and const are hoisted in Block scope,
 // While, var is hoisted in Global scope.
}

console.log(tempa); // 10
console.log(tempc); // Uncaught ReferenceError: tempc is not defined

// 56. Parameters vs Arguments?

var temp_abc = function(param1, param2) { // labels/identifiers are parameters
 console.log("temp_abc called");
}
// 57. Check if a Number is a Power of Two using bitwise '&' operator

const isNumberPowerOfTwo = number => !!number && (number & (number -1)) == 0;
// 58. snippet to check if all the elements are equal

const allEqual = arr => arr.every(val => val === arr[0]);

console.log(allEqual([1, 2, 3, 4, 5, 6])); // false
console.log(allEqual([1, 1, 1, 1])); // true