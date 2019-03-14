/*  
    We're implementing this similarly to a singly linked list for performance. 
    Also pushing/popping off the front of the list as opposed to the end because it's O(1) time that way
    (less traversing across the list, and we don't need the bulk of an Array structure)
    so think of it more as a unshift/shift.

    Insertion -  O(1)
    Removal -  O(1)
    Searching -  O(n)
    Access -  O(n)
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let node = new Node(value);
        if(!this.first){ //if there are no nodes in the stack, set first and last property to newly created node
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first; //store current first node
            this.first = node; //insert new node
            node.next = temp; //set next property on node to be the previously saved first node
        }
        return ++this.size;
    }

    pop(){
        let deleted = this.first;
        if(this.size > 1) {
            this.first = this.first.next;
        } else if(this.size === 1){
            this.first = null;
            this.last = null;
        } else { // size is 0 or less
            return null;
        }
        this.size--;
        return deleted.value;
    }
}

let stack = new Stack();
stack.push("One");
stack.push("Two");
stack.push("Three");
stack.push("Four");
stack.pop();
console.log(stack);