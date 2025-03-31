
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
        newNode.next = this.head;           // Point new node next to head
        this.head = newNode;                // Update head to new node
        this.size++;                        // Increment size of linked list
    }

    addAtTail(val) {
        const newNode = new ListNode(val);  // Create a new node with the given value
        if (this.size === 0) {
            this.head = newNode;             // If list is empty, head is new node
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;      // Traverse to the last node
            }
            current.next = newNode;          // Append the new node at the end
        }
        this.size++;                         // Increment size of linked list
    }

    addAtIndex(index, val) {
        if (index < 0 || index > this.size) {
            return; // Do nothing if index is invalid
        }
        if (index === 0) {
            this.addAtHead(val); // If index is 0, add at head
        } else {
            const newNode = new ListNode(val);
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next; // Travers