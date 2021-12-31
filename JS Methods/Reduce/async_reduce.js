/* https://zellwk.com/blog/async-await-in-loops/
 */

// The simplest (and most efficient way) to use await in reduce is to:
// Use map to return an array promises
// await the array of promises
// reduce the resolved values

const reduceLoop = async _ => {
    console.log('Start')
    
    const promises = fruitsToGet.map(getNumFruit)
    const numFruits = await Promise.all(promises)
    const sum = numFruits.reduce((sum, fruit) => sum + fruit)
    
    console.log(sum)
    console.log('End')}

    // This version is simple to read and understand, and takes one second to calculate the total number of fruits.

    const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// The reducer function takes four arguments:

// 1. Accumulator
// 2. Current Value
// 3. Current Index
// 4. Source Array