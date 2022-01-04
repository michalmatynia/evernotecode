
// 1. First way of testing Async
const { findUserByEmail, findUserById } = require('../users')

describe('The Find the user by email function', () => {

    // Fucntion is Asynchronous - so tests waits fro completion, we need to call the done() function in Mocha
    it('finds a user by email', done => {

        findUserByEmail('bahdcoder@gmail.com').then((response) => {

            expect(response.message).toEqual('User found successfully.')

            // call done in async function
            done()
        })
    })

    // 2. way of testing async return promise method from it()

    if('find a user by email (using the return promise method', ()=> {

        return findUserByEmail('bahdcoder@gmail.com').then(response=> {

            expect(response.message).toEqual('User found successfully.')


        })

        
    })
    it('finds a user by email (Using async/await)', async () => {
        const response = await findUserByEmail('bahdcoder@gmail.com')

        expect(response.message).toBe('User found successfully.')
    })

    it('rejects with error if user with email was not found.', () => {
        const actual = findUserByEmail('x@y.com')

        expect(actual).rejects.toEqual(new Error('User with email: x@y.com was not found.'))
    })
})

describe('The findUserById function', ()=> {
    it('should find a user by id', async ()=> {

        const response = await findUserById(1)
        expect(response.message).toBe('User found successfully.')

    })

    it('should reject if user not found by id', ()=> {
        // return findUserById(90).then(()=>{
        //     assert.fail('Expected the findUserById to throw')
        // }, error =>{
        //     assert.equal(error.message, 'User with id: 90 was not found.')

        // })
   
        const actual = findUserById(90)

        // The below line expects rejection to equal a specifiv Error Message
        expect(actual).rejects.toEqual(new Error('User with id: 90 was not found.'))
   
    })
})