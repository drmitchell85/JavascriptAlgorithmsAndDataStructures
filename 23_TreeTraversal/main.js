class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    };
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    };

    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            var curr = this.root;
            
            // we will break out of this with a return statement once we insert
            while(true) {

                // no duplicates
                if (val === curr.value) return undefined;

                // if val is less than current value, move down the left tree
                if (val < curr.value) {

                    // no left node exists, so we can insert here
                    if (curr.left === null) {
                        curr.left = newNode;
                        return this;

                    // a left node exists, so it becomes the current node
                    // and while loop will check again
                    } else {
                        curr = curr.left;
                    };

                // if val is greater than current value, move down the right tree    
                } else if (val > curr.value) {

                    // no right node exists, so we can insert here
                    if (curr.right === null) {
                        curr.right = newNode;
                        return this;
                    } else {
                        curr = curr.right
                    };
                };
            };
        };
    };

    // find node with val in tree
    find(val) {
        if (!this.root) return undefined;
        if (this.root.value === val) return this.root;

        var curr = this.root;
        while(true) {

            if (curr.value === val) return curr;

            if (val < curr.value && curr.left) {
                curr = curr.left;
            } else if (val < curr.value && !curr.left) {
                return undefined;
            } else if (val > curr.value && curr.right) {
                curr = curr.right;
            } else if (val > curr.value && !curr.right) {
                return undefined;
            };
        };
    };

    /**
     * Breadth-first search
     * (1) Create a queue and a variable to store the values of nodes visited
     * (2) Place the root node in the queue
     * (3) Loop as long as there is anything in the queue
     * (3a) Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
     * (3b) If there is a left propery on the node dequeued add it to the queue
     * (3c) If there is a right property on the node dequeued add it to the queue
     * (4) Return the var that stores the queues
     */
    bfs() {
        var data = [], queue = [], node = this.root;

        // place the root node in the queue
        queue.push(node);

        // loop as long as there is anything in the queue
        while (queue.length) {

            // take from the start of the queue
            node = queue.shift();
            data.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        };
        return data;
    };

    /**
     * Depth-first pre-order search
     * (1) Create a var to store the values of nodes visited
     * (2) Store the root of the BST in a var called current
     * (3) Write a helper func which accepts a node
     * (3a) Push the val of the node to the var that stores the values
     * (3b) If the node has a left property call the helper func with the left property on the node
     * (3c) If the node has a right property call the helper func with the right property on the node
     * (4) Invoke the helper func on the current var
     */
    dfsPreorder() {
        var data = [];

        // helper func that will accept a node
        function traverse(node) {

            // push the val of the node to the data array
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);

        };

        traverse(this.root);
        return data;
    };

    /**
     * Depth-first post-order search
     * (1) Create a var to store the values of nodes visited
     * (2) Store the root of the BST in a var called current
     * (3) Write a helper func which accepts a node
     * (3a) If the node has a left property, call the helper func on that left property
     * (3b) If the node has a right property, call the helper func on that right property
     * (3c) Push the value of the node to the var which stores the values
     * (4) Invoke the helper func on the current var
     */
    dfsPostorder() {
        var data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        };

        traverse(this.root);
        return data;
    };

    /**
     * Depth-first in-order search
     * (1) Create a var to store the values of nodes visited
     * (2) Store the root of the BST in a var called current
     * (3) Write a helper func which accepts a node
     * (3a) If the node has a left property, call the helper func on that left property
     * (3b) Push the value of the node to the var which stores the values
     * (3c) If the node has a right property, call the helper func on that right property
     * (4) Invoke the helper func on the current var
     */
    dfsInorder() {
        var data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        };

        traverse(this.root);
        return data;
    };
};

var tree = new BinarySearchTree();
tree.root = new Node(50);
tree.insert(20)
tree.insert(30)
tree.insert(10)
tree.insert(5)
tree.insert(60)
tree.insert(70)
// console.log(tree.bfs());
console.log("dfsPreorder(): \n", tree.dfsPreorder());
console.log("dfsPostorder(): \n", tree.dfsPostorder());
console.log("dfsInorder(): \n", tree.dfsInorder());