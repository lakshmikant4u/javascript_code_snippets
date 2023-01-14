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
testFunction?.(); // Test Function