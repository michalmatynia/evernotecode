// curried function

const add = x => y => x + y

// Here is the same1 code without arrow functions …

const add = function (x) {
    return function (y) {
      return x + y
    }
  }

//   So our add function returns a function – we can use parentheses for added clarity. The bolded text is the return value of our function add
const add = x => (y => x + y)

// Calling curried functions
// So in order to use our curried function, we have to call it a bit differently …
add(2)(3) 