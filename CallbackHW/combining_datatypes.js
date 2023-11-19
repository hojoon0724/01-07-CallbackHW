console.log("yo");

// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
  colors: ["red", "blue", "green", "yellow"],
};
console.log(crayonBox.colors[2]);

// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
  cap: ["metal", "plastic"],
  color: ["blue", "white"],
};
console.log(bottle.color[0]);

// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = ["home depot", "trader joes", "amazon", { seller: "apple", amount: 1000 }];
console.log(receipt[3].amount);

// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
  { unit: 1, tenants: ["Jason Moomoo", "Paula Deen"] },
  { unit: 2, tenants: ["Alex Johnson", "Emily Davis"] },
  { unit: 3, tenants: ["Jessica Miller", "Jordan Brown", "Taylor Anderson"] },
];

console.log(apartmentBuilding[0].tenants[0]);

// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const knit = () => {
  const specs = {
    item: "scarf",
    size: "6ft",
    material: "wool",
  };
  return specs;
};
console.log(knit().material);

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonSelector = () => {
  const crayonBox = {
    colors: ["red", "blue", "green", "yellow"],
  };
  return crayonBox;
};
console.log(crayonSelector().colors[1]);

// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

const powerButton = () => {
  function options() {
    console.log("some....... BODY once told me the world is macaroni");
  }
  return options();
};

powerButton();

// Model a Vending Machine
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = {
  snacks: [
    { name: "pringles", price: 10 },
    { name: "doritos", price: 6 },
    { name: "snickers", price: 3 },
  ],
  vend: (i) => {
    console.log(`here's your ${vendingMachine.snacks[i].name}`);
  },
};

vendingMachine.vend(0);

// -----------------------------------------------------
// Callbacks
// -----------------------------------------------------

// Make a function add that takes two arguments (numbers) and sums them together
function addTwoNums(a, b) {
  let answer = a + b;
  return answer;
}

// Make a function subtract that takes two arguments (numbers) and subtracts them
function subtractTwoNums(a, b) {
  let answer = a + b;
  return answer;
}

// Make a function multiply that takes two arguments and multiplies them
function multiplyTwoNums(a, b) {
  let answer = a * b;
  return answer;
}

// Make a function divide that takes two arguments and divides them
function divideTwoNums(a, b) {
  let answer = a / b;
  return answer;
}

// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// Call calculate 4 times, each time using one of the operation functions you wrote
function calcCallback(num1, num2, cbFunc) {
  console.log(cbFunc(num1, num2));
}

calcCallback(4, 8, addTwoNums);
calcCallback(9, 74, subtractTwoNums);
calcCallback(82, 7, multiplyTwoNums);
calcCallback(244, 4, divideTwoNums);

// Function definition placement
//? Clean up this code, so that it works and has function definitions in the correct place
const bar = () => {
  console.log("bar here");
};

const foo1 = () => {
  console.log("foo here");
};

foo1();
bar();

// Error reading
//? What is meant by the error(s) this produces?

/*
foo();
const foo ()=>{
    console.log('hi');
}
*/

// There are 2 possible answers.

// Answer 1
/*
/Users/hojoon/Desktop/Coding-Stuff/01-07/CallbackHW/combining_datatypes.js:144
const foo ()=>{
      ^
SyntaxError: Identifier 'foo' has already been declared
*/
// This means that it cannot use function "foo" because it's already been defined and it can't change it because it's a "const"

// Answer 2
/*
/Users/hojoon/Desktop/Coding-Stuff/01-07/CallbackHW/combining_datatypes.js:144
const foo ()=>{
      ^^^
SyntaxError: Missing initializer in const declaration
*/
// This means that the function "foo" is trying to run but the function "foo" hasn't been defined. (i.e., the order is wrong)

// -----------------------------------------------------
// Section 3 - Array Methods with Callbacks
// -----------------------------------------------------

// A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.
// But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.
// By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.
// Two arrays to work with

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

// The first question is for the numbers array. The second question is for the words array.
// You don't have to write an answer to the thought questions.

// Every
// Determine if every number is greater than or equal to 0
let everyNumIsZero = nums.every((num) => num >= 0);
console.log(everyNumIsZero);
// determine if every word shorter than 8 characters
let shorterThanEightChars = panagram.every((ltr) => ltr.length < 8);
console.log(shorterThanEightChars);

// Filter
// filter the array for numbers less than 4
let filterLessThanFour = nums.filter((num) => num < 4);
console.log(filterLessThanFour);
// filter words that have an even length
let filterEvenLengthWords = panagram.filter((word) => word.length % 2 === 0);
console.log(filterEvenLengthWords);

// Find
// Find the first value divisible by 5
let firstDivByFive = nums.find((num) => num % 5 === 0);
console.log(firstDivByFive);
// find the first word that is longer than 5 characters
let wordLongerThanFive = panagram.find((word) => word.length > 5);
console.log(wordLongerThanFive);

// Find Index
// find the index of the first number that is divisible by 3
let divisblByThree = nums.findIndex((num) => num % 3 === 0);
console.log(divisblByThree);
// find the index of the first word that is less than 2 characters long
let lessThanTwoChars = panagram.findIndex((word) => word.length < 2);
console.log(lessThanTwoChars);

// For Each
// console.log each value of the nums array multiplied by 3
let multiByThree = nums.forEach((num) => console.log(num * 3));
// console.log each word with an exclamation point at the end of it
let addExclToWord = panagram.forEach((word) => console.log(`${word}!`));

// Thought Questions
// What happened to the original array?
//*Nothing. The functions are reading the array elements but nothing is being written
// Can you store the values from a forEach method in a new array?
let newNumsArray = [];
let pushNums = nums.forEach((num) => newNumsArray.push(num));
console.log(newNumsArray);

// Map
// make a new array of each number multiplied by 100
let makeNumCentury = nums.map((num) => num * 100);
console.log(makeNumCentury);
// make a new array of all the words in all uppercase
let makeUpperCase = panagram.map((word) => word.toUpperCase());
console.log(makeUpperCase);

// Thought Questions
// What happened to the original array?
//*Nothing. Everything is only being read. New processed things have been sent to a new array
// Can you store the values from a map method in a new array?
let newNewArray = [];
newNewArray = makeNumCentury;
console.log(newNewArray);

// Some
// Find out if some numbers are divisible by 7
let someDivblBySeven = nums.some((num) => num % 7 === 0);
console.log(`Some are divisible by 7`, someDivblBySeven);
// Find out if some words have the letter a in them
let someLtrIsA = panagram.some((word) => word.split("").includes("a") === true);
console.log(someLtrIsA);
