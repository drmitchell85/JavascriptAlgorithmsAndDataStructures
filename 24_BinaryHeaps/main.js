/**
 * Binary Heap
 * - similar to BST but with some different rules
 * - in a MaxBinaryHeap parent nodes are always larger than child nodes
 * - in a MinBinaryHeap parent nodes are always smaller than child nodes
 * 
 * Typically used to implement priority queues which are a very common data structure
 * Also commonly used with graph traversal algorithms
 * 
 * Finding parent/child in an array:
 * For any index of an array n...
 * the left child is stored at 2n + 1
 * the right child is stored at 2n + 2
 * 
 * For any child node at index n...
 * its parent is at index (n-1)/2 floored
 */


class MaxBinaryHeap {
    constructor() {
        this.values = [];
    };

    /**
     * Adding to a MaxBinaryHeap
     * - add to the end
     * - Bubble up
     * 
     * (1) Push the value into the values property of the heap
     * (2) Bubble up:
     * (2a) Create a var called index which is the length of the values property - 1
     * (2b) Create a var called parentInd which is the floor of (index-1)/2
     * (2c) Keep looping as long as the values element at parentInd is less than the values element at the child index
     * (2c1) swap the value of the values element at parentInd with the values of the element property at the child index
     * (2c2) Set the index to be the parentInd and start over
     */
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    };

    bubbleUp(){
        let idx = this.values.length - 1;
        const el = this.values[idx];
        while (idx > 0) {
            let pIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[pIdx];
            
            if (el <= parent) break;
            
            this.values[pIdx] = el;
            this.values[idx] = parent;
            idx = pIdx;
        };
    };

    /**
     * Extract the max value
     * - Remove the root
     * - Replace with the most recently added
     * - Adjust (sink down)
     * 
     * (1) Swap the first val in the values property with the last one
     * (2) pop from the values property, so you can return the value at the end
     * (3) Have the new root "sink down" to the correct spot...
     * (3a) parent idx starts at 0
     * (3b) find the idx of the left child (2*idx+1) check not out of bounds...
     * (3c) find the idx of the right child (2*idx+2) check not out of bounds...
     * (3d) if the left or right child is greater than the element, swap. if both are larger,
     * swap with the larger of the two
     * (3e) the child idx you swapped to now becomes the new parent idx
     * (3d) keep looping and swapping until neither child is larger than the element
     * (4) return the old root! 
     */
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        };
    
        return max;
    };

    sinkDown(){
        let idx = 0;
        const len = this.values.length;
        const el = this.values[0];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let left, right;
            let swap = null; // track if any swaps were made this loop

            // check if leftIdx is in bounds
            if (leftIdx < len) {
                left = this.values[leftIdx];
                if (left > el) {
                    swap = leftIdx;
                };
            };
            
            // check if rightIdx is in bounds
            if (rightIdx < len) {
                right = this.values[rightIdx];
                if (
                    (swap === null && right > el) || 
                    (swap !== null && right > left)
                ) {
                    swap = rightIdx;
                };
            };

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = el;
            idx = swap;
        };
    };
};

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log({heap})