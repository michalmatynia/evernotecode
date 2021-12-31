

// the original function to call
function orderFood(food, callback) {
    alert(`Ordering my ${food} at the counter.`);
    callback();
    }
    
    // Modern Promises
    createAudioFileAsync(audioSettings)
    .then(successCallback)
    .catch(failureCallback);

    // ES6 Promises arrow function
createAudioFileAsync(audioSettings)
.then(result => console.log(`Audio file ready at URL: ${result}`)
.catch(error => console.log(`Error generating audio file: ${error}`);

// Promise based example
function logFetch(url) {
return fetch(url)
.then(response => response.text())
.then(text => {
console.log(text);
}).catch(err => {
console.error('fetch failed', err);
});
}

// Async example
async function logFetch(url) {
    try {
    const response = await fetch(url);
    console.log(await response.text());
    }
    catch (err) {
    console.log('fetch failed', err);
    }
    }
// Example 2 
export const asyncApiCall = (args = null,  actionType = null) => {
    const listOfArgs = handleActionArgs(args)
    const outputType = setOutputType(args, actionType)

    return async dispatch => {
      try {
        const request = await axios.get(`${GENERIC_SERVER}/count_items_res_integer?${listOfArgs}`)
        return {
            type: outputType,
            payload: request
        }
      }
      catch(error) {
        return {
            type: outputType,
            payload: null
        }
      }
  
    }
  }
//Async: Promise Error Handling
/* https://zellwk.com/blog/async-await/ */

// We know that asynchronous functions always return a promise. When we call a promise, we can handle errors in a catch call. This means we can handle any errors from our asynchronous function by adding .catch.

const test = async _ => {
    const one = await getOne(false)
    const two = await getTwo(false)
    const three = await getThree(false)}
    
    test()
    .catch(error => console.log(error)))