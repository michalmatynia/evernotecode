// https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c

// Let me start first by explaining what Set is:

// Set is a new data object introduced in ES6. Because Set only lets you store unique values. When you pass in an array, it will remove any duplicate values.

// Okay, let’s go back to our code and break down what’s happening. There are 2 things going on:
// 1. First, we are creating a new Setby passing an array. Because Setonly allows unique values, all duplicates will be removed.
// 2. Now the duplicates are gone, we’re going to convert it back to an array by using the spread operator ...

/* 1. USING SET */
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]

// Step 1
const uniqueSet = new Set(array);
// Set {0,1,2,3,4,5,6,7,8,9} 

// Step 2 
const backToArray = [...uniqueSet];
// [0,1,2,3,4,5,6,7,8,9]

// === Convert Set to an Array using Array.from
// Alternatively, you can also use Array.from to convert a Set into an array:

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]

Array.from(new Set(array))
// [0,1,2,3,4,5,6,7,8,9]

/* 2: Using filter */

// In order to understand this option, let’s go through what these two methods are doing: indexOf and filter.

// indexOf


// The indexOf method returns the first index it finds of the provided element from our array.

const array = [0, 1, 2, 3, 4, 5, 6, 7, 0, 0, 0]

array.indexOf(0) // 0
array.indexOf(1) // 1
array.indexOf(2) // 2
array.indexOf(3) // 3

/* filter */


// The filter() method creates a new array of elements that pass the conditional we provide.In other words, if the element passes and returns true, it will be included in the filtered array.And any element that fails or return false, it will be NOT be in the filtered array.

// Let’s step in and walk through what happens as we loop through the array.

const array = [0, 1, 2, 3, 4, 5,0,0,0]

array.filter((item, index) => {
    return array.indexOf(item) === index
})

// Below is the output from the console.log showed above. The duplicates are where the index doesn’t match the indexOf. So in those cases, the condition will be false and won’t be included in our filtered array.

/* Retrieve the duplicate values
 */

// We can also use the filter method to retrieve the duplicate values from the array. We can do this by simply adjusting our condition like so:

const array = [0,0,1,2, 3, 4,0,0]
array.filter((item, index)=> array.indexOf(item) !== index)

/* 1. USING REDUCE */

// The reduce method is used to reduce the elements of the array and combine them into a final array based on some reducer function that you pass.

// In this case, our reducer function is checking if our final array contains the item. If it doesn’t, push that item into our final array. Otherwise, skip that element and return just our final array as is (essentially skipping over that element).

// Reduce is always a bit more tricky to understand, so let’s also step into each case and see the output:

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0,0]

array.reduce((unique, item)=>{
    return unique.includes(item) ? unique : [...unique, item]
})