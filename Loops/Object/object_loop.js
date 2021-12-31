// Looping Object

/* FOR */

for (let index = 0; index < fruitsToGet.length; index++) { // Get num of each fruit }
}

/* FOR...OF... */
for (const [key, value] of Object.entries(response.data)) {

}

//If I just want to access values
for (const value of Object.values(element.idpath)) {
digform = digform[value]
    }

/* FOR...IN... */
// The for...in statement iterates over all enumerable properties of an object that are keyed by strings

for (let key in obj) {
    let value = obj[key];
    console.log(key, value);
}
// -------
let obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
}
for (let key in obj) {
  let value = obj[key];
  console.log(key, value);

var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
console.log(`obj.${prop} = ${obj[prop]}`);}
// ------

var counter = 0;var limit = 3;var data = [1, 2, 3, 4, 5, 6, 7];

for (var key in data) {
    var value = data[key];
    console.log('key: ' + key + ' --> value: ' + value);
    if (++counter >= limit) break;}

    /* FOREACH */
    purchases.forEach((item) => {
        total += item.quantity * item.amount
      })

      /* MAP */

      Object.map((item)=> {})