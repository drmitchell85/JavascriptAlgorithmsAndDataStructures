/**
 * NOTE: can currently have duplicate keys
 * BIG O os O(1) for insert, deletion, and access
 * - this is largely based on how good our hash is,
 * minimizing collisions
 */
class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    };

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        };
        return total;
    };

    /**
     * Set Pseudocode:
     * (1) Accepts a key and a value
     * (2) Hashes the key
     * (3) Stores the key-value pair in the hash table array via separate chaining
     * @param {*} key 
     * @param {*} value 
     */
    set(key, value) {
        let idx = this._hash(key);

        // check if nothing already exists at the index; if empty add an empty array
        if (!this.keyMap[idx]) this.keyMap[idx] = [];
        
        // now push into the existing array
        this.keyMap[idx].push([key, value]);
    };

    /**
     * Get Pseudocode
     * (1) Accepts a key
     * (2) Hashes the key
     * (3) Retrives the key-value pair
     * (4) If not found, returns undefined
     * @param {*} key 
     */
    get(key) {
        let idx = this._hash(key);

        // check if anything is at the index
        if (this.keyMap[idx]) {
            for (let i = 0; i < this.keyMap[idx].length; i++) {

                // within the sub array, find the correct entry
                if (this.keyMap[idx][i][0] === key) return this.keyMap[idx][i][1];
            };
        };
        return undefined;
    };

    /**
     * loops through the hash table array and 
     * returns an array of keys in the table
     */
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            
            // check if anything is in the bucket first
            if (this.keyMap[i]) {

                // now loop over that bucket
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    
                    // check for duplicates, dont push if they exist
                    if (!keysArr.includes(this.keyMap[i][j][0])) keysArr.push(this.keyMap[i][j][0]);
                };
            };
        };
        return keysArr;
    };

    /**
     * loops through the hash table array and
     * returns an array of the values in the table
     */
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            
            // check if anything is in the bucket first
            if (this.keyMap[i]) {

                // now loop over that bucket
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    
                    // check for duplicates, dont push if they exist
                    if (!valuesArr.includes(this.keyMap[i][j][1])) valuesArr.push(this.keyMap[i][j][1]);
                };
            };
        };
        return valuesArr;
    };
};

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")
console.log(ht.keys())
console.log(ht.values())