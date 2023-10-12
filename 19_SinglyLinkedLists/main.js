
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // add to end
    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    // remove from end
    pop() {
        if (!this.head) return undefined

        // must iterate to the second to the last and make that the tail
        var curr = this.head
        var prevNode = this.head
        while (curr.next) {
            prevNode = curr
            curr = curr.next
        }

        this.tail = prevNode
        prevNode.next = null
        this.length--
        if (this.length === 0) this.head = null, this.tail = null
    }

    // remove head
    shift() {
        if (!this.head) return undefined
        var newHead = this.head.next
        this.head = newHead
        this.length--
        if (this.length === 0) this.tail = null
    }

    // add to start
    unshift(val) {
        var newNode = new Node(val)
        if (!this.head) this.head = newNode, this.tail = newNode
        var oldHead = this.head
        this.head = newNode
        newNode.next = oldHead
        this.length++
    }

    // get a node by a certain position
    get(val) {
        if (val === 0) return this.head
        if (val < 0 || val >= this.length) return null
        
        var count = val
        var currNode = this.head
        while (count !== 0) {
            currNode = currNode.next
            count--
        }

        return currNode
    }

    // set a value at a location
    set(v, i) {
        var fndNode = this.get(i)
        if (fndNode) {
            fndNode.val = v
            return true
        } else {
            return false
        }
    }

    insert(v, i) {
        if (i < 0 || i > this.length) return false

        if (i === 0) {
            this.unshift(v)
            this.length++
        } else if (i + 1 === this.length) {
            this.push(v)
            this.length++
        } else {
            var frstNode = this.get(i-1)
            var nextNode = frstNode.next
            var newNode = new Node(v)
            frstNode.next = newNode
            newNode.next = nextNode
            this.length++
        }
    }

    remove(i) {
        if (i < 0 || i > this.length) return false

        if (i === 0) {
            this.shift()
            this.length--
        } else if (i + 1 === this.length) {
            this.pop()
            this.length--
        } else {
            var frstNode = this.get(i-1)
            var delNode = frstNode.next
            var nextNode = delNode.next
            frstNode.next = nextNode
            this.length--
        }
    }

    // reverse in place
    reverse() {

        var node = this.head
        this.head = this.tail
        this.tail = node
        var next
        var prev = null
        for(var i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
    }

    print(){
        var arr =[]
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }

        console.log(arr)
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Hi")
list.push("konichiwa")
console.log(list)
list.reverse()
console.log(list)
// list.shift()
// // list.pop()
// console.log(list)
// list.unshift("TEST")
// console.log(list)
// console.log(list.get(0))
// list.set("Change node", 1)
// console.log(list)