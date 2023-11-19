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

console.log(apartmentBuilding[2].tenants[0]);

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
