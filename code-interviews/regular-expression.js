// Regular expressions: regex: test method, match and replace --> check stackoverflow

let pattern = /xyz/;
console.log(pattern, typeof(pattern));


// Find if the string xyz exists or not by returning true or false
let value  = 'This is xyz a test';
console.log(pattern.test(value));


// A string containing the text to replace for every successful match of search value in the string
// Replaces text in a string using an object that supports replacement within a string.

console.log(value.replace(pattern, 'just')); // replace xyz to just

// The match function return an object that support being matched against \, and returns an array 
//containing the results of that search

console.log(value.match(pattern));


var match = value.match(pattern);
console.log(match.index);