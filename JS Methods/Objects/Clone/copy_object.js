// If you want shallow copy, use Object.assign({}, a)


// Shallow-cloning is also done with {...spreadoperator}
// ---
// If you do not use Dates, functions, undefined, regExp or Infinity within your object, a very simple one liner is JSON.parse(JSON.stringify(object)):
// - For "deep" copy, use JSON.parse(JSON.stringify(a))

// Most advanced is the loop

// To do this for any object in JavaScript will not be simple or straightforward. You will run into the problem of erroneously picking up attributes from the object's prototype that should be left in the prototype and not copied to the new instance. If, for instance, you are adding a clone method to Object.prototype, as some answers depict, you will need to explicitly skip that attribute. But what if there are other additional methods added to Object.prototype, or other intermediate prototypes, that you don't know about? In that case, you will copy attributes you shouldn't, so you need to detect unforeseen, non-local attributes with the hasOwnProperty method.

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

var d1 = new Date();

/* Executes function after 5 seconds. */
setTimeout(function(){
    var d2 = clone(d1);
    alert("d1 = " + d1.toString() + "\nd2 = " + d2.toString());
}, 5000);

// Example 2 

let test = {
    value : 'efwfewf'
}


let newt = {...test, ref: 1 } 

/* 1. Using Spread
 */
const food = { beef: '🥩', bacon: '🥓' };

const cloneFood = { ...food };

console.log(cloneFood);// { beef: '🥩', bacon: '🥓' }
// !I can add object by spread!
let object = {...oldobject, newobject}

/* 2. Using Object.assign */

const food = { beef: '🥩', bacon: '🥓' };

const cloneFood = Object.assign({}, food);

console.log(cloneFood);// { beef: '🥩', bacon: '🥓' }

/* 3. Using JSON */

// This final way will give you a deep copy. Now I will mention, this is a quick and dirty way of deep cloning an object. For a more robust solution, I would recommend using something like lodash

const food = { beef: '🥩', bacon: '🥓' };

const cloneFood = JSON.parse(JSON.stringify(food))

console.log(cloneFood);// { beef: '🥩', bacon: '🥓' }

// - JSON.stringify/parse only work with Number and String and Object literal without function or Symbol properties.
// - deepClone work with all types, function and Symbol are copied by reference.

// Here's an example:

const lodashClonedeep = require("lodash.clonedeep");

const arrOfFunction = [() => 2, {
test: () => 3,}, Symbol('4')];

// deepClone copy by refence function and Symbol
console.log(lodashClonedeep(arrOfFunction));// JSON replace function with null and function in object with undefined
console.log(JSON.parse(JSON.stringify(arrOfFunction)));

// function and symbol are copied by reference in deepClone
console.log(lodashClonedeep(arrOfFunction)[0] === lodashClonedeep(arrOfFunction)[0]);
console.log(lodashClonedeep(arrOfFunction)[2] === lodashClonedeep(arrOfFunction)[2]);