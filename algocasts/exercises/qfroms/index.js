// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        // create 2 stacks to move records around so that we can access the first element 
        // (inefficient as hell but preserves the Stack structure without adding cheat methods)
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }

    add(record){
        //adding can work as normal. Just push it on to the stack.
        return this.stackOne.push(record);
    }

    reverseOrder(){
        //this swaps records into 2nd stack, effectively reversing the order so we can hack the stack to work like a queue
        while(this.stackOne.peek()){
            this.stackTwo.push(this.stackOne.pop());
        }
    }

    restoreOrder(){
        //this transfers records back to their original stack, restoring stack order after whatever operation 
        while(this.stackTwo.peek()){
            this.stackOne.push(this.stackTwo.pop());
        }
    }

    remove(record){
        // removing is where we need to shuffle everything to the 2nd stack... 
        this.reverseOrder();
        // grab the last (first-in) element,
        const removed = this.stackTwo.pop();
        this.restoreOrder();
        return removed;
    }

    peek(){
        //gotta do the same shifting to reach the first value
        this.reverseOrder();
        const record = this.stackTwo.peek();
        this.restoreOrder();
        return record;
    }
}

module.exports = Queue;
