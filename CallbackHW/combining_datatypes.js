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
