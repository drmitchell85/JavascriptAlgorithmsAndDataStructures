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
};

var tree = new BinarySearchTree();
tree.root = new Node(50);
tree.insert(20)
tree.insert(10)
tree.insert(60)
tree.insert(70)
tree.insert(70)
console.log(tree.find(70));