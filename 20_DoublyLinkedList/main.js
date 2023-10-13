class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // add new node to end of list
    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            var oldTail = this.tail
            oldTail.next = newNode
            newNode.prev = oldTail
            this.tail = newNode
        }
        this.length++
        return this
    }

    // remove node from end of list
    pop() {
        if (!this.tail) {
            return undefined
        } else if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            var oldTail = this.tail
            var newTail = oldTail.prev
            oldTail.prev = null
            newTail.next = null
            this.tail = newTail
        }
        this.length--
        return oldTail
    }

    // remove node from start of list
    shift() {
        if (this.length === 0) {
            return undefined
        } else if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            var oldHead = this.head
            var newHead = oldHead.next
            oldHead.next = null
            newHead.prev = null
            this.head = newHead
        }
        this.length--
        return oldHead
    }

    // add to node to start
    unshift(val) {
        var newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            var oldHead = this.head
            newNode.next = oldHead
            oldHead.prev = newNode
            this.head = newNode
        }
        this.length++
        return newNode
    }

    // get a node at a certain index
    get(ind) {
        if (this.length === 0 || ind < 0 || this.length <= ind) return undefined
        const mid = Math.floor(this.length / 2)
        var current
        if (ind <= mid) {
            var count = 0
            current = this.head
            while (count !== ind) {
                current = current.next
                count++
            }
        } else {
            var count = this.length - 1
            current = this.tail
            while (count !== ind) {
                current = current.prev
                count--
            }
        }
        return current
    }

    // set a value of a node at a given ind
    set(ind, val) {
        var node = this.get(ind)
        if (node) {
            node.val = val
            return true
        } else {
            return false
        }
    }

    // insert a new node at an index
    insert(ind, val) {
        if (ind < 0 || ind > this.length) return false
        
        if (this.length === 0) {
            this.unshift(val)
            return true
        } else if (ind + 1 === this.length) {
            this.push(val)
            return true
        } else  {
            var newNode = new Node(val)
            var nextNode = this.get(ind)
            var prevNode = nextNode.prev
            newNode.next = nextNode
            newNode.prev = prevNode
            prevNode.next = newNode
            nextNode.prev = newNode
            this.length++
            return true
        }
    }

    // remove the node at a certain index
    remove(ind) {
        if (ind < 0 || ind > this.length) return false

        if (ind === 0) {
            this.shift()
            return true
        } else if (ind === this.length - 1) {
            this.pop()
            return true
        } else {
            var delNode = this.get(ind)
            var prevNode = delNode.prev
            var nextNode = delNode.next
            delNode.prev = null
            delNode.next = null
            prevNode.next = nextNode
            nextNode.prev = prevNode
            this.length--
            return true
        }
    }

    print() {
        var arr = []
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log({arr})
    }

    printNodes() {
        var current = this.head
        while(current) {
            console.log({current})
            current = current.next
        }
        console.log({ length: this.length })
    }
}

var list = new DoublyLinkedList()
list.push("Zero")
list.push("First")
list.push("Second")
list.push("Third")
list.push("Fourth")
list.remove(2)
list.printNodes()