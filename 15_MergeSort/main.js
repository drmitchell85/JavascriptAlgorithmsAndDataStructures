/**
 * John von Neumann invented it! 
 * 
 * - Combination of merging and sorting
 * - exploits the fact that arrays of 0 or 1 ele are always sorted
 * - works by decomposing an array into smaller arrays of 0 or 1 elements,
 * then building up in a newly sorted array
 * 
 * complexity of O(log n)
 * O(log n) is the number of decompositions
 * O(n) comparisons per decomposition
 */

/**
 * (1) break up arrays into halves until arrays are empty or have one element
 * (2) once we have smaller sorted arrays, merge those arrays with other sorted arrays
 * until we are back at the full length of the array
 * @param {*} arr 
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr

    // establish our mid point
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid)) 
    return merge(left, right)
}

/**
 * Steps:  
 * (1) create an empty array, take a look at the smallest values in each input array
 * (2) while there are still values we havent looked at...
 * (2a) if the val in the first array is smaller than the value in the second array,
 * push the value in the first array into our results and move on to the next value in the first array
 * (2b) if the val in the first array is larger than the val in the second array,
 * push the value in the second array into our results and move on to the next value inthe second array
 * (2c) once we have exhausted one array, push in all remaining values from the other array
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function merge(arr1, arr2) {
    let results = []
    let i = 0, j = 0
    while (i < arr1.length && j < arr2.length) {

        if (arr2[j] > arr1[i]) results.push(arr1[i]), i++
        else if (arr2[j] <= arr1[i]) results.push(arr2[j]), j++

    }
    while (i < arr1.length) results.push(arr1[i]), i++
    while (j < arr2.length) results.push(arr2[j]), j++

    return results
}

// console.log(merge([100, 200], [1, 10, 50, 51, 66, 79]))
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]))