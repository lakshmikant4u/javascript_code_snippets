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
// 4. Conditionally add a property to an Object

const includeSalary = true;

const employee = {
    id: 1,
    name: "Shrihari",
    ...(includeSalary && { salary: 100000 })
}

// 5. Use Array includes method to check for multiple criteria

const rgbColors = ["red", "green", "blue"];
const isRGBcolor = (color) => {
    return rgbColors.includes(color)
}

console.log(isRGBcolor("red")) // true
console.log(isRGBcolor("white")) // false