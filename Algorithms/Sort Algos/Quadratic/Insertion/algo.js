
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
                    console.log(arr[j])

            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([4,43,465,4,544,54,334,7,78]))
