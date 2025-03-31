
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null; // Head node of the linked list
        this.size = 0;    // Size of the linked list
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            return -1; // Return -1 if the index is inva