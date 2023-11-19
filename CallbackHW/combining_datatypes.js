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
