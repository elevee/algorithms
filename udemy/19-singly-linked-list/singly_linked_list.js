class Node {  // all it needs is value and next!
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        if(!this.head){ //if there is no head node, set head & tail to new Node
            this.head = this.tail = new Node(value)
        } else { //otherwise, just edit the current tail's next pointer and change the tail
            this.tail = this.tail.next = new Node(value)
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        if(this.length === 1){
            this.head = this.tail = null;
        } else {
            while(current.next){ //when this finishes, we'll have the 2nd to last (and the last) node
                newTail = current;
                current = current.next;
            }
            console.log(newTail.value)
            console.log(current.value)
            newTail.next = null;
            this.tail = newTail;
        }
        this.length--;
        // console.log(current)
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        let removed = this.head;
        if(this.length > 1){
            this.head = removed.next;
        } else {
            this.head = this.tail = null;
        }
        this.length--;
        return removed;
    }

    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(!this.head || index < 0 || index > this.length - 1) return null;
        let current = this.head,
            i = 0;
        while(i !== index){
            current = current.next
            i++
        }
        return current;
    }

    set(index, value){
        let node = this.get(index);
        if(node){
            node.value = value;
            return true
        }
        return false;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(value); //!! is just a sneaky way of coercing this to a boolean to stay consistent
        if(index === 0) return !!this.unshift(value);
        let nodeAfter = this.get(index);
        let nodeBefore = this.get(index-1);
        let newNode = new Node(value);
        if(nodeAfter){
            newNode.next = nodeAfter;
        }
        if(nodeBefore){
            nodeBefore.next = newNode;
        }
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0) return this.shift();
        let prev = this.get(index-1);
        let removed = prev.next;
        let next = removed.next;
        prev.next = next;
        this.length--;
        return removed;
    }

    reverse(){
        let node = this.head;
        let prev = null;
        let next = node.next;
        let list = new LinkedList();
        while(node.next){
            list.unshift(node.value)
            node = node.next;
        }
        list.unshift(node);
        return list
    }
}

let list = new LinkedList();
list.unshift("Add me!");
// list.unshift(4);
list.push(1);
list.push(3);
list.push(7);
list.push(10);
// list.pop();
// list.pop();
// list.pop();
// let deleted = list.pop();
let reversed = list.reverse()
// list.set(1, "papa")
// let deleted = list.shift();
// list
// reversed
console.log(reversed)