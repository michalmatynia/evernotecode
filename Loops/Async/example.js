// ----- SOME ARTICLES
// https://javascript.info/async-iterators-generators
// https://github.com/tc39/proposal-async-iteration
// https://tech.ringieraxelspringer.com/blog/javascript/async-iterators-in-javascript-iterating-through-a-database-in-nodejs/kv97nwh
// https://medium.com/@lavrton/javascript-loops-how-to-handle-async-await-6252dd3c795
// https://stackoverflow.com/questions/47999534/node-async-loop-how-to-make-this-code-run-in-sequential-order
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
// https://dev.to/ganeshmani/promises-inside-a-loop-javascript-es6-19p4
// https://stackoverflow.com/questions/24586110/resolve-promises-one-after-another-i-e-in-sequence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// https://stackoverflow.com/questions/27759593/how-do-i-wait-for-a-promise-to-finish-before-returning-the-variable-of-a-functio?rq=1
// https://stackoverflow.com/questions/31426740/how-to-return-many-promises-and-wait-for-them-all-before-doing-other-stuff

// --------

/* FOREACH */
// https://zellwk.com/blog/async-await-in-loops/
// forEach is not promise-aware. It cannot support async and await. You cannot use await in forEach.

// For-loop is better, map only if I need to create a variable from loop
/* FOR */
// I can create variable in a for loop putting it in function
const forLoop = async _ => {
    ///tutaj for-loop
    for (let index = 0; index < fruitsToGet.length; index++) { // Get num of each fruit }
    }
}

/* MAP */
let mappromises = await otherlanguages.payload.map(async (item) => {
    // ...
}
            await Promise.all(mappromises)

            // Since map always return promises (if you use await), you have to wait for the array of promises to get resolved. You can do this with await Promise.all(arrayOfPromises).

            const mapLoop = async _ => {
    console.log('Start')

    const promises = fruitsToGet.map(async fruit => {
        const numFruit = await getNumFruit(fruit)
        return numFruit
    })

    const numFruits = await Promise.all(promises)
    console.log(numFruits)

    console.log('End')
}

// Here’s what you get:
'Start''[27, 0, 14]''End'

//                 For loop model
// https://javascript.info/async-iterators-generators

let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() { // called once, in the beginning of for..of
      return {
        current: this.from,
        last: this.to,
  
        next() { // called every iteration, to get the next value
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  for(let value of range) {
    alert(value); // 1 then 2, then 3, then 4, then 5
  }