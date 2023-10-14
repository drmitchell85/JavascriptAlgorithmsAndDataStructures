class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    };
};

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    };

    // add to start of stack
    push(val) {
        var newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first
            this.first = newNode
        };
        return ++this.size;
    };

    // remove from start of stack
    pop() {
        if (this.size === 0) return -1;

        var popped = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = popped.next;
            popped.next = null;
        };
        this.size--;
        return popped
    };
};


var stack = new Stack()
stack.push("One")
stack.push("Two")
stack.push("Three")
console.log({stack})
stack.pop()
// stack.pop()
// stack.pop()
console.log({stack})