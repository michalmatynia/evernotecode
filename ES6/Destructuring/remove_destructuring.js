// Remove through destructuring, does it work on Array? Yes

const { _id, _v, ...restcurrent } = insert

const data = { a: 1, b: 2, c: 3 }; const { a, ...rest } = data; console.log(a); // 1 console.log(rest); // { b: 2, c: 3 }

// Dynamically removing a property by key
const data = { a: 1, b: 2, c: 3 };

const removeProp = 'b';

const { [removeProp]: remove } = data;

console.log(remove); // 2
/* 
That’s right, because we’re dynamically constructing a new variable, we need to use : remove to reassign it a new name. Otherwise, how will we reference it? We can’t reference [removeProp] so we’ll need to remember this. */