import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

/* 
BINARY HEAPS
    Very similar to a binary search tree, but with some different rules.

    MaxBinaryHeap - parent nodes are always larger than child nodes
    MinBinaryHeap - parent nodes are always smaller than child nodes

    Max Binary Heap
    - Each parent has at most two child nodes (binary)
    - The value of each parent node is ALWAYS greater than its child nodes
    - The parent is greater than the children, but there are no guarantees between sibling nodes
    - A binary heap is as compact as possible. All the children of each node are as full as they 
    can be and left children are filled out first


    Why?
    Used to implement priority queues and graph traversal algorithms

    Heaps are often represented as arrays. We can find relationships by adhering to this:
        For any index of an array n...                 And in reverse...for any child node at index n...
        The left child is stored at 2n+1               Its parent is at index Math.floor((n-1)/2)
        The right child is at 2n+2
    
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const val = this.values[index];
    while (index > 0) {
      //don't keep going if we're going into negative indices
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      // console.log(`${val} parent is ${parent}`)
      if (val < parent) break; //it's in the right place
      this.swap(this.values, parentIndex, index); //otherwise, swap
      index = parentIndex; //update index before looping again
    }
  }

  bubbleDown() {
    //also called sinkDown
    let parent = 0; //start at root
    const length = this.values.length;
    while (true) {
      let leftChildIdx = 2 * parent + 1;
      console.log(leftChildIdx);
      let rightChildIdx = 2 * parent + 2;
      console.log(rightChildIdx);
      let parentValue = this.values[parent];
      console.log(parentValue);
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > parentValue) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > parentValue) || //we're not swapping left and right child greater
          (swap !== null && rightChild > leftChild) //left child is about to be swapped but rightChild is greater than left
        ) {
          swap = rightChildIdx;
        }
      }
      console.log(`swap is ${swap}`);
      //if both left and right children are larger, swap with largest child
      if (swap === null) break; //if swap is still null, we break out and are done.
      this.swap(this.values, parent, swap);
      parent = swap;
    }
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  extractMax() {
    //swap first value with last value
    if (this.values.length > 0) {
      this.swap(this.values, 0, this.values.length - 1);
      let oldRoot = this.values.pop(); //pop from values property and return the old root at the end
      console.log(this.values);
      // have the new root sink down to the correct spot by switching as nec
      this.bubbleDown();
      return oldRoot;
    }
  }

  swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
