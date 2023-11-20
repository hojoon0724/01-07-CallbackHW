console.log("weeee");

// DRY
// Accronym for don't repeat yourself. Consolidate your input to the least amount

// KISS
// Keep it simple, stupid. Make it simple

// Avoid creating a YAGNI
// You aren't going to need it. Don't make something until you need it

// Do the simplest thing that could possibly work
// Read: KISS

// Don't make me think
// Make something that is intuitive. Like a door handle. You don't need instructions to use it

// Write code for the maintainer
// You should be able to understand what you're thinking now after never seeing it in 5 years

// Single responsibility principle
// Read: KISS - do one thing at a time

// Avoid premature optimization
// Make it work first, optimize later

// Separation of concerns
// Don't mix things together unless absolutely necessary

//? Which ones surprise you (if any)?
// No surprises. These principles share the same values as Dieter Rams's 10 Principles of Good Design, Don Norman's Design of Everyday Things, and Toyota's Just In Time principle

//? Which one is currently giving you the most struggle?
// Avoiding YAGNI, because I start with a flowchart of functions that are needed for good user experience and then I find out that some things aren't needed.

// -----------------------------------------------------
// Commenting Code
// -----------------------------------------------------

// Makes function "f" that sets up "l" as an argument. (l looks)
const f = (l) => {
  // Establishes variables "es", "p", "c", and "n"
  let es = 0,
    p = 0,
    c = 1,
    n = 0;
  // Starts a loop where the condition is: "c" is less or equal to "l"
  while (c <= l) {
    // Reassigns "n" value to the sum of "c" and "p"
    n = c + p;
    // reassigns "c" and "p" values to "n" and "c" respectively
    [c, p] = [n, c];
    // Reassigns "es" value to the sum of itself and the value of "c" only if "c" is an even number, and if not, "0" is added
    es += c % 2 === 0 ? c : 0;
  }
  // returns the "es" value
  return es;
};
// Runs function "f" and console.logs the return value
console.log(f(55));
console.log(f(13));

//? In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// function name could be "addEvenNumbersOfFibonacci"
// "evenSum" could have been called "sumOfAllEvenNums" - This would have given the reader an easier time figuring out what the function is, but with a clear function name, "evenSum" is obvious what it is.

//? If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// f2 is easier to decipher

//? Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// semi-colon is not necessary
