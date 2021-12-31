// With Lodash

import _ from 'lodash'
const animalObject = { 'bear': 1, 'snake': '2', 'cow': 3 };
 
const newObject = _.omit(animalObject, ['bear', 'cow']);

// newObject is:  { 'snake': '2' }
// This is pretty nifty right? Lodash seems to have a method for everything.


// With ES7

const animalObject = { 'bear': 1, 'snake': '2', 'cow': 3 };
 
const {bear, ...other} = animalObject

// other is: { 'snake': '2', 'cow:'  3}