// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data, children = []){
        this.data = data;
        this.children = children;
    }

    add(data) {
        return this.children.push(new Node(data));
    }

    remove(data) {
        return this.children = this.children.filter(child => child.data !== data);
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    traverseBF(fn) {
        // this.root.children();
        let queue = [this.root];
        while(queue.length){
            let current = queue.shift();
            if(current.children && current.children.length > 0){
                // current.children.forEach(child => queue.push(child));
                // or you could do
                queue.push(...current.children);
            }
            fn(current);
        }
    }

    traverseDF(fn) {
        let queue = [this.root]; //form queue
        while(queue.length){
            let current = queue.shift(); //take first item off queue
            if(current.children && current.children.length > 0){
                //if current item has children
                queue.unshift(...current.children);
                //process
            }
            fn(current);
        }
    }
}

module.exports = { Tree, Node };
