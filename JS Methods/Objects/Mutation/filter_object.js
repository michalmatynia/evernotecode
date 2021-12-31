/* Filter: Array of Objects from Array

Object To Array */

let uniquetags_Arr = Object.values(uniquetags)
/* 
Filter to Objects 
Fitler - Inaczej Distinct
*/

let result =  ref_list_A.payload.map(a => a.referenceID);
let filteredresult = response.payload.map(a => a._id);
/* 
https://stackoverflow.com/questions/5072136/javascript-filter-for-objects/37616104
 */

let sieve = ['_id', 'createdAt', 'updatedAt', '__v']

// This is the way besides destructuring

const filtered = Object.keys(raw)
  .filter(key => allowed.includes(key))
  .reduce((obj, key) => {
    obj[key] = raw[key];
    return obj;
  }, {});

//   Filter object and turn it into Array
let stripped_current_arr = [];
for (let key in current) {
    if (current.hasOwnProperty(key) && !sieve.includes(key)) {
        stripped_current_arr.push(current[key])
    }
}
/* 
1. Using reduce and Object.keys
2. As (1), in combination with Object.assign
3. Using map and spread syntax instead of reduce
4. Using Object.entries and Object.fromEntries

1. Using reduce and Object.keys

With reduce and Object.keys to implement the desired filter (using ES6 arrow syntax): */
Object.filter = (obj, predicate) =>
Object.keys(obj)
.filter( key => predicate(obj[key]) )
.reduce( (res, key) => (res[key] = obj[key], res), {} );

// Example
var scores = {  John: 2, Sarah: 3, Janet: 1};var filtered = Object.filter(scores, score => score > 1);
    console.log(filtered);
    
//     Expand snippet
// Note that in the above code predicate must be an inclusion condition (contrary to the exclusion condition the OP used), so that it is in line with how Array.prototype.filter works.

/* 2. As (1), in combination with Object.assign

In the above solution the comma operator is used in the reduce part to return the mutated res object. This could of course be written as two statements instead of one expression, but the latter is more concise. To do it without the comma operator, you could use Object.assign instead, which does return the mutated object: */

Object.filter = (obj, predicate) =>
Object.keys(obj)
.filter( key => predicate(obj[key]) )
.reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );

/* 
3. Using map and spread syntax instead of reduce

Here we move the Object.assign call out of the loop, so it is only made once, and pass it the individual keys as separate arguments (using the spread syntax): */

Object.filter = (obj, predicate) =>
Object.assign(...Object.keys(obj)
.filter( key => predicate(obj[key]) )
.map( key => ({ [key]: obj[key] }) ) );

/* 4. Using Object.entries and Object.fromEntries

// As the solution translates the object to an intermediate array and then converts that back to a plain object, it would be useful to make use of Object.entries (ES2017) and the opposite (i.e. create an object from an array of key/value pairs) with Object.fromEntries (ES2019). */
// It leads to this "one-liner" method on Object:

Object.filter = (obj, predicate) =>
Object.fromEntries(Object.entries(obj).filter(predicate));


// https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object