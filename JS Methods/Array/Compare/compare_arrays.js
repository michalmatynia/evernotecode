/* https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848 */

let intersection = arrA.filter(x => arrB.includes(x));

let difference = arrA.filter(x => !arrB.includes(x));

let difference = arrA

 .filter(x => !arrB.includes(x))

 .concat(arrB.filter(x => !arrA.includes(x)));

 // Example 2
 let difference = arrA

 .filter(x => !arrB.includes(x))

 .concat(arrB.filter(x => !arrA.includes(x)));  

 // Example 3 
 let union = [...new Set([...arrA, ...arrB])]; 