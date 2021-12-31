// ES6 Commands

let mySet = new Set(['Harry', 'Ron', 'Hermione','Voldemort','Harry'])

let filtered = [...mySet].filter((item)=>{
  return item.startsWith('H')
})

// ###################

let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));

// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));