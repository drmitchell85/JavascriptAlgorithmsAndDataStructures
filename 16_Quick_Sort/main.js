/**
 * 
 * @param {*} arr 
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        var pivotIndex = pivotHelper(arr, left, right)

        // left
        quickSort(arr, left, pivotIndex - 1)
    
        // right
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr
}

/**
 * (1) Given an array, this helper func should designate an element as the pivot
 * (2) It should then rearrange elements in the array so that all values less than 
 * the pivot are moved to the left of the pivot, and all values greater than the pivot
 * are moved to the right of the pivot
 * (3) the order of elements on either side of the pivot does not matter!
 * (4) the helper should do this in place, that is, should not create a new array
 * (5) when complete, the helper should return the index of the pivot
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 */
function pivotHelper(arr, start = 0, end = arr.length+1) {
    
    // establish what our pivot will be
    // for ease, we will choose the 0 index value
    var pivot = arr[start]

    // keeps track of where we will swap the pivot to at the very end
    var swapIdx = start

    for (var i = start + 1; i < arr.length; i++) {

        // if our pivot is larger than the scanned value,
        // increase the swap index by one and swap the
        // value at the scanned index and the swapIdx
        // ex. in [4, 8, 2, 1] the first iteration would
        // end up swapping 8, and 2 at the [1] and [2] index values
        // (!) Note: whenever a value is found lower than our pivot value,
        // the bottom, or swapIdx, is shifted up. This is how values are
        // separated on either side of the pivot
        if (pivot > arr[i]) swapIdx++, swap(arr, swapIdx, i)

    }

    // have our final swap to shift the pivot
    swap(arr, start, swapIdx)

    // important, we return the swapIdx!
    return swapIdx
}

function swap(arr, idx1, idx2) {
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

console.log(quickSort([100, -1, 4, 8, 2, 1, 5, 7, 6, 3]))
// is 4 greater than 8? no, do nothing
// is 4 greater than 2? yes, so increment swapIdx by one, then swap swaIdx and i, in this case it will be 8 swapped with 2