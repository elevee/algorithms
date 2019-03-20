/*
    Main differentiator is that Doubly Linked Lists have a prev attribute that points to previous node,
    whereas Singly Linked Lists only have the next pointer.

    TIME COMPLEXITY
        Insertion - O(1)
        Removal - O(1)      removal can be constant time because of prev attribute (not the same for singly linked list)
        Searching - O(n)    even with our optimization, O(n)/2 is still an O(n) relationship
        Access - O(n)

    SPACE
        Storing a prev attribute uses more space in memory
*/

class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        const node = new Node(value);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node; //before we reassign tail, set next attribute on current tail
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        const deleted = this.tail;
        if(!this.head || !deleted) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = deleted.prev;
            this.tail.next = null;
            deleted.prev = null; //just to sever any lingering references
                    // (it's good to return just the existing node and not the entire list if including prev pointer)
        }
        this.length--;
        return deleted;
    }

    shift(){
        const deleted = this.head;
        if(!deleted) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = deleted.next;
            deleted.next.prev = null; //sever previous link on new head node
            deleted.next = null; //sever next link on returned node
        }
        this.length--;
        return deleted;
    }

    unshift(value){
        const node = new Node(value);
        if(!this.length){
            this.head = node;
            this.tail = node;
        } else {
            const oldHead = this.head;
            this.head = node;
            oldHead.prev = node;
            node.next = oldHead;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        //determine if index is closer to beginning or end (optimization)
        let startFromBeginning = index <= (this.length-1 / 2);
        let current = startFromBeginning ? this.head : this.tail;
        let counter = startFromBeginning ? 0 : this.length;
        while(counter !== index){
            current = startFromBeginning ? current.next : current.prev;
            startFromBeginning ? counter++ : counter--;
        }
        return current;
    }

    set(index, value){
        let node = this.get(index);
        if(!node) return false;
        node.value = value;
        return true;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(this.length === 0) return !!this.unshift(value);
        if(this.length === index) return !!this.push(value);
        let node = new Node(value);
        let currentNode = this.get(index);
        node.prev = currentNode.prev;
        currentNode.prev.next = node; //deal with node before it
        currentNode.prev = node; //setting old node to have correct prev attribute
        node.next = currentNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0 || this.length === 1) return this.shift();
        if(index === this.length-1) return this.pop();
        const removed = this.get(index);
        const prevNode = removed.prev; 
        const nextNode = removed.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removed.prev = null, removed.next = null;
        this.length--;
        return removed;
    }
}

let list = new DoublyLinkedList();
list.push(2);
list.push(4);
list.push(6);
list.push(8);
// list.unshift(0);
// list.insert(1, "bob");
console.log(list)
// console.log(list.remove(1));
// console.log(list.head.next.next)
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())