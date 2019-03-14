/*
    Inserting from last (push), and removal from first (shift).

    Insertion -  O(1)
    Removal -  O(1)
    Searching -  O(n)
    Accessing -  O(n)
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){
        let node = new Node(value);
        if(!this.first){
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue(){ //remove element from first position
        if(this.first){
            let removed = this.first;
            this.first = this.first.next; //if not found, will be set to null
            this.size--;
            if(!this.size){
                this.last = null;
            }
            return removed.value;
        }
        return null;
    }
}

let queue = new Queue();
queue.enqueue("How");
queue.enqueue("is");
queue.enqueue("your");
queue.enqueue("mother");
queue.enqueue("doing");
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);