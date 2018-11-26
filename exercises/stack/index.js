// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor(){
        this.data = [];
    }

    push(n){
        return this.data.push(n);
    }

    pop(n){
        return this.data.pop(n);
    }

    peek(n){
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;
