// Looping Array - ITERABLE OBJECT

/* FOR */

for (let i = 0; i < array.length; i++) { }

/* MAP */

const newArray = myArray.map((current, index, array) => {
    // return item for newArray
})

/* 
FOR...OF 
The for...of statement creates a loop iterating over iterable objects 
*/

const array1 = ['a', 'b', 'c'];
for (const value of iterable) {
    console.log(value);
}

/* 
FOREACH
You can use let instead of const too, if you reassign the variable inside the block
 */

for (let value of iterable) {
    value += 1;
    console.log(value);
}
response.data.forEach((item, index, array) => {
    console.log(item);

})

/* FOR...IN
NOT RECCOMENDED for Arays, for in is for loopin through keys, but in Array indexes don't come up correctly */

