// https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object

// ----------- DESTRUCTURING WITH SPREAD

const myObject = {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"};
const { regex, ...newObject } = myObject;
console.log(newObject);


// To reassign to the same variable, use a let:

let myObject = {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"};({ regex, ...myObject } = myObject);
console.log(myObject);

// https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object
// remove dynamic variable using the spread syntax
const key = 'a';
const { [key]: foo, ...rest } = { a: 1, b: 2, c: 3 };

// Mutating Objects
// https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6

