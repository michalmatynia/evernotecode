// indexOf
// includes
// find
// findIndex

function psed(arr, val) {

    for (i = 0; i < arr.length; i++) {

        if (arr[i] === val) {
            return i
        }
    }

    return -1

}

console.log(psed([1, 2, 3, 4], 3))
