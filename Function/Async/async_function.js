//Async: Promise Error Handling
/* https://zellwk.com/blog/async-await/ */

// We know that asynchronous functions always return a promise. When we call a promise, we can handle errors in a catch call. This means we can handle any errors from our asynchronous function by adding .catch.

const test = async _ => {
    const one = await getOne(false)
    const two = await getTwo(false)
    const three = await getThree(false)}
    
    test()
    .catch(error => console.log(error)))