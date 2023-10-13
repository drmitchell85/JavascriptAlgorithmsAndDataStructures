/**
 * Pseudocode
 * (1) Figure out how many digits the largest num has
 * 
 * (2) Loop from k = 0 until the largest num of digits
 * 
 * (3) For each iteration of the loop:
 * (3a) we create buckets for each digit
 * (3b) place each num in the corresponding bucket based on its kth digit
 * 
 * (4) Replace our existing array with values in our buckets,
 * starting with 0 and going up to 9
 * 
 * (5) Return list at the end!
 */

/**
 * Our main function
 * @param {*} nums 
 */
function radixSort(nums) {

    // find out our max digit count
    let maxDigitCount = mostDigits(nums)
    
    // iterate maxDigitCount times
    for (let k = 0; k < maxDigitCount; k++) {

        // create ten empty arrays
        let digitBuckets = Array.from({length: 10}, () => [])

        for (let i = 0; i < nums.length; i++) {

            // get the digit at the k place of the num
            let digit = getDigit(nums[i], k)

            // now push into the appropriate bucket
            digitBuckets[digit].push(nums[i])

        }

        // now concat the array
        nums = [].concat(...digitBuckets)
    }

    return nums
}

/**
 * returns the digit in num at the given place
 * @param {*} num 
 * @param {*} place 
 */
function getDigit(num, place) {

    // we divide num by 10 to the place power
    // Math.abs() allows us to work with negative numbers
    // ex 7323 => 73.23 % 10 => 3
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

/**
 * gives us the num of digits in a num
 * @param {*} num 
 * @returns 
 */
function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

/**
 * Gives us the num of digits for the longest num in an array
 * @param {*} nums 
 * @returns 
 */
function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }

    return maxDigits
}

console.log(radixSort([20, 401, 1, 3, 63, 8243, 512, 700, 10, 1000]))