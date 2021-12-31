

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
    return a + 100;
}

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;


// For example, if you have multiple arguments or no arguments, you'll need to re-introduce parentheses around the arguments:

// Traditional Function
function (a, b){
    return a + b + 100;
  }
  
  // Arrow Function
  (a, b) => a + b + 100;
  
  // Traditional Function (no arguments)
  let a = 4;
  let b = 2;
  function (){
    return a + b + 100;
  }
  
  // Arrow Function (no arguments)
  let a = 4;
  let b = 2;
  () => a + b + 100;