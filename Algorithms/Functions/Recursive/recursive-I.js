// Function I
function countDown(num) {
    if (num <= 0) {
        console.log('all done')
        return
    }

    console.log(num)
    num--;
    countDown(num)
}

// Function II

function sumRange(num) {
    if (num === 1)
        return 1
    return num + sumRange(num - 1)
}
