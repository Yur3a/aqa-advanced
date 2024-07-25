/*
    Create a method to see whether the string is ALL CAPS.
*/

function isUpperCase(str) {
    return str === str.toUpperCase();
}

console.log(isUpperCase("hello")); 
console.log(isUpperCase("HELLO"));