/**
 * Unlike bubble sort, we will now move the smallest elements to the start
 * O(n)^2 complexity
 */

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var minIndex = i
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) minIndex = j
        }
        if (arr[minIndex] < arr[i]) swap(arr, minIndex,i)
    }
    return arr
}

function swap(arr, idx1, idx2) {
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

console.log(selectionSort([2, 1, 4, 3, 6, 5, -3, -7]))