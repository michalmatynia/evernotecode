const assert = require('assert')

const { parse, stringify } = require('../parse-stringify')

describe('The stringify function', () => {
    it('should stringify an object into valid string', () => {
        const actual = stringify({ by: 'kati-franz' })
        const expected = 'by=kati-franz'
        expect(actual).toBe(expected)

    })
})

describe('The parse function', () => {
    it('should parse a query string into an object', () => {
        const actual = parse('?by=kati-franz')
        const expected = { by: 'kati-franz' }

        // Compare the properties of both objects
        // MOcha
        // assert.deepEqual(actual, expected)
        expect(actual).toEqual(expected)


    })
})