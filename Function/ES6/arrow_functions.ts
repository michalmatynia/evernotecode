let a = 4;
let b = 2;

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
};

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
(a) => a + 100;

// For example, if you have multiple arguments or no arguments, you'll need to re-introduce parentheses around the arguments:

// Traditional Function
function add(a: number, b: number) {
  return a + b + 100;
}

// Arrow Function
(a: number, b: number) => a + b + 100;

// Traditional Function (no arguments)

function addNoArgs() {
  return a + b + 100;
}

// Arrow Function (no arguments)
a = 4;
b = 2;
() => a + b + 100;



// Likewise, if the body requires additional lines of processing, you'll need to re-introduce brackets PLUS the "return" (arrow functions do not magically guess what or when you want to "return"):

// Traditional Function
function addDifferent(a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}

// And finally, for named functions we treat arrow expressions like variables
// Traditional Function
function bobTrad (a){
  return a + 100;
}

// Arrow Function
let bobEd6 = a => a + 100;


/* 
Arrow functions can have either a "concise body" or the usual "block body".
In a concise body, only an expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.
 */

var funcone = x => x * x;
// concise body syntax, implied "return"

var functwo = (x, y) => { return x + y; };
// with block body, explicit "return" needed

// This function runs immediately, takes arguments, shows everything after braces

// Arrow functions used as methods

/* ARROW FUNCTIONS - Using as Methods */
// As stated previously, arrow function expressions are best suited for non-method functions. Let's see what happens when we try to use them as methods:

var obje = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}


// This function runs immediately, takes argument, I can run functions inside, but need to RETURN return()
// Example 1
let changeSort = () => {}

// Example 2
let handleToggle2 = (value) => {
    console.log(value);
}

// Example 3
/* 
onClick={this.ccc({removed : item.name})} 
myprops.toggleItem({myprops, value: item._id, name: item.languages[0].name, country: item.name})
*/

// This function runs on event, takes arguments and event arguments, shows everything after braces
// Invokes function on event           
changeSort = () => () => {}

/*
onClick={(event) => this.props.cleartag({event : event, removed : item.name})}

() => myprops.toggleItem({myprops, value: item._id, name: item.languages[0].name, country: item.name})
*/

// This function runs on value
let handleToggle4 = value => () => {}

// This function runs on value like onClick, and also gives me information about the element which triggered it
let handleToggle = value => (element) => {}

// I can pass as many arguments as I want into this function
let handleToggle3 = (value, name) => (element) => {}

/* 
Left part I'm declaring the arguments, right side I'm passing them

First part of the passing function is the declaration of variables, second part is passing the variables (So if I have the variables from the current component, I don't need to declare them).

If I create variables within Block, I need to declare them in the parent component
*/
/* 
<ListBlockLarge
type="cart"
list={this.props.languages.ListLanguages}
removeItem={(id) => this.removeEntityFromDb(id)}
handleVisible={(id, checked) => this.handleVisible(id, checked)}
changePosition={(id, direction, prevPosition) => this.changePosition(id, direction, prevPosition)}
/> 
*/


// Pass Functions to Components

// <ListItem key={item._id} dense button onClick={
//     // console.log(myprops.toggleItem)
//     () => myprops.toggleItem({myprops, value: item._id, name: item.languages[0].name, country: item.name})
    
//     } style={{ padding: '10px 0' }}>