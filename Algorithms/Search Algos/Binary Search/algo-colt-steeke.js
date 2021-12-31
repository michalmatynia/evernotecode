function searchBinary(arr, val) {

    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== val && start <= end) {
        if (val !== arr[middle]) {

            if (val > arr[middle]) {

                start = middle + 1

            } else {

                end = middle - 1
            }

            middle = Math.floor((start + end) / 2)

        }

        if (arr[middle] == val) {
            return middle
        }
    }

    return -1

}

console.log(searchBinary([1, 2, 3, 4, 5, 6, 7, 8, 9], 4))
