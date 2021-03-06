function selectionSort(arr) {
    const swap = (arr,idx1,idx2)=>{
        [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i = 0; i < arr.length; i++) {
        let lowest = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        if (i !== lowest) {
            swap(arr, lowest, i)
        }

    }

    return arr

}

console.log(selectionSort([2, 4, 5, 545, 5, 454, 34, 34, 4344, 443]))
