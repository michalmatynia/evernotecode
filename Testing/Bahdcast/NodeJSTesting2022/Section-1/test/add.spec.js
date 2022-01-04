/* BAsic Test */

const add = require('../add')

// Importing Assert module from nodejs

// Assertion - check if expected is equal to result
const result = add(1,3)
const expected = 4
// ------
// MAnual Assertion --- BELOW ----
// if (result === 4) {
//     console.log('test pass.');
// } else {
//     throw new Error('Expected 1- 4 to equal 4')
// }

/* assert.equal(result, expected, 'Add function doesn\'t work properly')
 */
/// ---- Global Method on JEST
describe('The add function', ()=>{

    // Global Function give the title of just one particular test
    it('adds two numbers', ()=> {
        const actual = add(1,3)
        const expected = 4

        expect(actual).toBe(expected)

    })

})