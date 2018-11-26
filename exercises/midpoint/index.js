// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    let slow = list.head; // both variables start at first element
    let fast = list.head;
    while(fast.next && fast.next.next){
        fast = fast.next.next; //fast advances by two
        slow = slow.next; //slow advances by one (acts as current halfway point)
    }
    return slow;
}

module.exports = midpoint;
