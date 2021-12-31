/*
await in filter doesn’t work the same way. In fact, it doesn’t work at all. You get the unfiltered array back


There are three steps to use await and filter properly:
Use map to return an array promises
await the array of promises
filter the resolved values 
*/

const filterLoop = async _ => {
    console.log('Start')
    
    const promises = await fruitsToGet.map(fruit => getNumFruit(fruit))
    const numFruits = await Promise.all(promises)
    
    const moreThan20 = fruitsToGet.filter((fruit, index) => {
    const numFruit = numFruits[index]
    return numFruit > 20
    })
    
    console.log(moreThan20)
    console.log('End')}
    Start
    [ 'apple' ]
    End