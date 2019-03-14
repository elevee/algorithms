/*
    TREES are non-linear data structures that contain a root and child nodes.
    BINARY TREES can have values of any type, but at most 2 children for each parent)
    BINARY SEARCH TREES are more specific binary trees - every node to the left of a parent is less than its value
            and every node to the right is greater. Therefore, you can only have a BST with data that is COMPARABLE.

    Breadth-First Search
    (Going across the siblings horizontally first)

    Steps (iteratively)
        - Create a queue (can be an array here) and a variable to store node values visited
        - Place the root node in the queue
        - Loop as long as there is anything in the queue
        - Dequeue a node from the queue and push the value of the node
          into the variable that stores the nodes.
        - If there is a left property on the node dequeued, add it to the queue
        - If there is a right property on the node dequeued, add it to the queue

             10
           6    15
         3   8    20

        queue: [8,20]
        visited: [10,6,15...]

    WHEN WOULD YOU USE?
        Both breadth and depth first have the same time complexity (they both hit all the nodes one time) but depending on 
        what the tree looks like, have a diffrent space complexity. If you have a really wide tree with tons of leaf nodes, it's 
        wiser to go with depth first, because breadth-first would take up much more space.

        If you have a long, linked-list-looking tree, breadth first would be the better search from a space complexity standpoint,
        because we're only saving one element in the queue before popping it off immediately, whereas with depth-first, there are 6
        levels of recursion being held on the stack at one moment with the below example:

        4
          7
            12
               35
                  43
                     55
*/

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(value){
        this.root = value ? new Node(value) : null;
    }

    insert(value){
        let newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            while(true){
                if(value === currentNode.value) return undefined;
                if(value < currentNode.value){
                    if(currentNode.left){
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = newNode;
                        return this;
                    }
                }
                if(value > currentNode.value){
                    if(currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = newNode;
                        return this;
                    }
                }
            }
        }
    }

    find(value){
        if(this.root){
            let current = this.root;
            while(current){
                if(current.value === value){
                    return current;
                } else if(current.value > value){
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
        }
        return undefined;
    }

    breadthFirstSearch(){
        let values = []; // better to return nodes, but values easier to see/demonstrate
        let queue = [];
        if(this.root){ 
            queue.push(this.root) 
        }
        while(queue.length){
            let current = queue.shift();
            values.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return values;
    }
}

let bst = new BinarySearchTree(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);
console.log(bst.breadthFirstSearch());