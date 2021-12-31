function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) {
        return null
    }

    for (i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

maxSubarraySum([2, 3, 6, 7, 8, 3, 5, 6], 3)
