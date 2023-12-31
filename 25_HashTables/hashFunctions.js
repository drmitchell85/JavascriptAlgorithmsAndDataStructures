/**
 * Hash Tables
 * - used to store key-value pairs
 * - like arrays, but keys are not ordered
 * - unlike arrays, hash tables are fast for all the following ops:
 * finding values, adding values, removing values
 * 
 * What makes a good hash?
 * - fast
 * - uniformly distributed
 * - reliable and deterministic (reproduceable)
 */

/**
 * Current issues with this hash:
 * (1) only hashes strings
 * (2) not constant time - linear in key length
 * (3) could be a bit more random...
 * @param {*} key 
 * @param {*} arrayLen 
 * @returns 
 */
function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        // map a to 1, b to 2, c to 3, etc...
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
};

function hash2(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;

    // if they key is less than 100 chars we will use the length, otherwise...
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
};

console.log(hash("Cat", 12));
console.log(hash("Cat", 12));
console.log(hash("Cat", 12));