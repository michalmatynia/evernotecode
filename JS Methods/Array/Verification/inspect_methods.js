/* SOME
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

EVERY
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

FIND 
The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.

FINDINDEX
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

- like FIND but return an index not value

INCLUDES
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

INDEXOF
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

REDUCE
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value. */
arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

/* SOME

1. Check if Array contains elements of another Array
ES6: */
const found = arr1.some(r=> arr2.indexOf(r) >= 0)

/* How it works
some(..) checks each element of the array against a test function and returns true if any element of the array passes the test function, otherwise, it returns false. indexOf(..) >= 0 and includes(..) both return true if the given argument is present in the array. */

// https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript/29447130
/* 
FIND */
arr.find(callback(element[, index[, array]])[, thisArg])


// Parameters

// callback
// Function to execute on each value in the array, taking 3 arguments:
// element
// 	The current element in the array.

// index Optional
// 	The index (position) of the current element in the array.

// array Optional
// 	The array that find was called on.

// thisArg Optional
// 	Object to use as this inside callback.