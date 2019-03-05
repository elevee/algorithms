// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.head;
    let fast = list.head;
    for(let i=0,j=n; i<n; i++){ // start fast pointer n items away from slow pointer
        fast = fast.next;
    }
    // could also do this
    // while (n > 0) {
    //    fast = fast.next;
    //    n--;
    // }

    while(fast.next){ //keep incrementing both by one until fast encounters a null value, marking end of list
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}

module.exports = fromLast;
