
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
            return -1; // Return -1 if the index is invalid
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next; // Traverse to the index-th node
        }
        return current.val; // Return the value at the specified index
    }

    addAtHead(val) {
        const newNode = new ListNode(val); // Create a new node with the given value
        newNode.next = this.head;           