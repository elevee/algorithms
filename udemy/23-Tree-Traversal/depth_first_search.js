/*
    Depth-First Search
    (Going down the child nodes vertically, left, then right)

    PREORDER - Middle/Left/Right
            Steps (recursively)
        - Create a variable to store the values of nodes visited
        - Store the root of the BST in a variable called current
        - Write a helper function which accepts a node
            - Push the value of the node to the variable that stores the values
            - If the node has a left property, call the helper function with the left property
            - If the node has a right property, call the helper function with the right property
        - Invoke the helper function with the current variable
        - Return the array of values

             10
           6    15
         3   8    20
                        [10, 6, 3, 8, 15, 20]
    
    POSTORDER - Left/Right/Middle - we drill down to the leaf nodes to the left, then to the right, then their parent. 
            Steps (recursively)
        - Everything's the same as Preorder, except we push the value of the parent node AFTER we 
        call traverse on the left and right children

             10
           6    15
         3   8    20
                        [3, 8, 6, 20, 15, 10]
    
    INORDER - Left/Middle/Right - we drill down to the leaf nodes to the left, then to the right, then their parent. 
            Steps (recursively)
        - Everything's the same as Preorder, except we push the value of the parent node AFTER we 
        call traverse on the left and right children

             10
           6    15
         3   8    20
                        [3, 6, 8, 10, 15, 20]


    WHEN/WHY TO USE ONE OR THE OTHER VARIANT:
    Hard to find a good answer, but a nice side-effect of an INORDER DFS is that the returned result is in order (presuming you're working with
    a binary search tree). If you need results that are in order (by value) to be displayed/imported somewhere, that may be helpful.

    PREORDER is great when you're trying to clone or duplicate a tree, like the DOM or a file structure, or you want to store it
    
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

    depthFirstSearchPreorder(){
        let values = []; // better to return nodes, but values easier to see/demonstrate
        let current = this.root; //we don't necessarily need the current variable, passing in this.root directly into traverse, but it enables us to have a different starting node
        
        function traverse(node){ //this doesn't duplicate nodes because it eventually bubbles back up to the root node, then does right side (for BSTs). Could easily add other branches for other tree types
            values.push(node.value);
            if(node.left) traverse(node.left); //branch down left side until we can't anymore
            if(node.right) traverse(node.right); //when it bubbles back up to the root node, we then do the same with right side.
        }
        traverse(current);
        return values;
    }

    depthFirstSearchPostorder() {
        let values = []; 
        let current = this.root; 
        
        function traverse(node){ 
            if(node.left) traverse(node.left); 
            if(node.right) traverse(node.right); 
            values.push(node.value); //push the parent last <--- just changed this one line!
        }
        traverse(current);
        return values;
    }

    depthFirstSearchInorder() {
        let values = []; 
        let current = this.root; 
        
        function traverse(node){ 
            if(node.left) traverse(node.left); 
            values.push(node.value); //push the parent in between left & right <--- just changed this one line!
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return values;
    }
}

let bst = new BinarySearchTree(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);
// console.log(bst.depthFirstSearchPreorder());
// console.log(bst.depthFirstSearchPostorder());
console.log(bst.depthFirstSearchInorder());