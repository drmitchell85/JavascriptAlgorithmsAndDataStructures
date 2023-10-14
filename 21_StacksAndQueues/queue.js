class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    };
};

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    };

    // add to end of queue
    enqueue(val) {
        var newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        };
        this.size++;
    };

    // remove start of queue
    dequeue() {
        if (this.size === 0) return -1;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            var temp = this.first.next;
            this.first.next = null;
            this.first = temp;
        };
        this.size--;
    };
};

var queue = new Queue()
queue.enqueue("One")
queue.enqueue("Two")
queue.enqueue("Three")
console.log({queue})
queue.dequeue()
console.log({queue})