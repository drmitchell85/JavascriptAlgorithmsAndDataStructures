/**
    start by picking the second element in the array

    now compare el with one before and swap if necessary

    cont to next el and if in the correct order, 
    iterate through the sorted portion to place 

    repeated until array is sorted

    worst case this is O(n)^2
 */

function insertionSort(arr) {

    for (var i = 1; i < arr.length; i++) {

        var curr = arr[i] 

        // start looping backwards from i
        for (var j = i - 1; j >= 0 && arr[j] > curr; j--) {
            // since the loop breaks once we find the curr value is less than arr[j]
            // we can simply keep moving values "up" the array
            arr[j+1] = arr[j]
        }

        arr[j+1] = curr
    }

    return arr
}

console.log(insertionSort([5, 3, 4, 1, 2]))