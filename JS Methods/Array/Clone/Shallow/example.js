// CLoning objects and Arrays - SHALLOW - array pointers cause the arrays not to change, no new arrays are creates

// #1) Use the slice() method

// slice() is a standard array method provided by JavaScript. You can check out its full documentation here.
var hobbies = ['Sports', 'Cooking']
var copiedHobbies = hobbies.slice()
// It basically returns a new array which contains all elements of the old element, starting at the starting index you passed (and then up to the max number of elements you defined). If you just call slice(), without arguments, you get a new array with all elements of the old array.

// #2) Use the spread operator

// If you're using ES6+, you can use the spread operator.
var hobbies = ['Sports', 'Cooking']
var copiedHobbies = [...hobbies]
// Here, you also create a new array (manually, by using []) and you then use the spread operator (...) to "pull all elements of the old array out" and add them to the new array.