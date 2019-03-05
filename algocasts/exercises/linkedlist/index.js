// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
        
        // refactored from:
        // const node = new Node(data, this.head); //pass 2nd arg in case we already have a head node
        // this.head = node;  //assigns new node to head
    }

    size(){
        let count = 0;
        if(this.head){
           let node = this.head;
            while(node){
                count++;
                node = node.next;
            }
        }
        return count;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let node = this.head;
        while(node){
            if(!node.next) return node;
            node = node.next;
        }
        return node;
    }

    clear(){
        return this.head = null;
    }

    removeFirst(){ //Removes only the first node of the linked list. The list's head should now be the second element.
        if(!this.head) return;
        return this.head = this.head.next;
    }

    removeLast(){ //Removes the last node of the chain
        let node = this.head;
        if(!node) return;
        if(!node.next) return this.head = null; //only 1 element in list
        while(node){
            if(!node.next.next){
                node.next = null;
                return;
            }
            node = node.next;
        }
    }

    insertLast(data){ // Inserts a new node with provided data at the end of the chain
        const lastNode = this.getLast();
        if(!this.head) {
            this.head = new Node(data);
            return this.head;
        }
        lastNode.next = new Node(data);
        return lastNode.next;
    }

    getAt(index){ // Returns the node at the provided index
        let node = this.head, count = 0;
        if(index > this.size()) return null;
        while(node){
            if(count === index) return node;
            node = node.next;
            count++;
        }
        return null;
    }

    removeAt(index){ // Removes node at the provided index
        const nodeToRemove = this.getAt(index);
        if(!nodeToRemove) return;
        if(index === 0){
            this.head = this.head.next;
            return;
        }
        const nextNode = nodeToRemove.next;
        const prevNode = this.getAt(index - 1);
        prevNode.next = nextNode;
    }

    insertAt(data, index){ // Create an insert a new node at provided index. If index is out of bounds, add the node to the end of the list.
        if(!this.head) return this.head = new Node(data); //inserts a new node with data at 0 index when list is empty
        if(index > this.size()) return this.insertLast(data); //inserts a new node if index is out of bounds
        
        const prevNode = this.getAt(index - 1);
        const nextNode = this.getAt(index);
        // we need to have this node link to the next node
        const thisNode = new Node(data, nextNode);
        // console.log(`At this point, Node data is ${thisNode.data}, node next is ${thisNode.next}`);
        // we need to set previous Node to link to new node
        if(index === 0){
            this.head = thisNode;
        }

        if(prevNode){
            prevNode.next = thisNode;
        }
    }

    forEach(fn){ // Calls the provided function with every node of the chain
        if(fn && typeof fn === "function"){
            for(let i = 0, j = this.size(); i<j; i++){
                fn(this.getAt(i));
            }
        }
    }

    //to implement for...of functionality, we're turning to generators
    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
