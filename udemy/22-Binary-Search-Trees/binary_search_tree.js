/*
    Insertion -  O(log n)
    Searching - O(log n)

    This is NOT guaranteed because in the event of an unbalanced BST, you could have more levels
    and worse performance.
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
}

let bst = new BinarySearchTree(42);
bst.insert(30);
bst.insert(22);
bst.insert(59);
console.log(bst.find(59));