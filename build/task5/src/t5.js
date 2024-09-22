"use strict";
// Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value) {
    // Use a type guard to check the actual type of 'value'
    if (typeof value === 'string') {
        // if type is string, return the length of the string
        return value.length;
    }
    else if (typeof value === 'number') {
        // if type is number, return the square of the number
        return value * value;
    }
    // Default return value (should never reach here)
    return 0;
}
// Prompt the user to enter a value as either a string or a number
const userIn = prompt("Enter user input") ?? ""; // Provide a default value if null
// Parse the user input to determine if it should be a number or a string
const parsedValue = !isNaN(Number(userIn)) && userIn.trim() !== "" ? Number(userIn) : userIn;
// Call the lengthOrSquare function
const resultValue = lengthOrSquare(parsedValue);
console.log(typeof resultValue);
console.log(resultValue);
