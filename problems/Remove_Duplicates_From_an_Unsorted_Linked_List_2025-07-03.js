
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicates(head) {
    // Use a Set to track seen values
    const seen = new Set();
    let current = head;
    let prev = null;

    while (current !== null) {
        if (seen.has(current.value)) {
            // Duplicate detected, remove it
            prev.next = current.next; // Bypass the current node
        } else {
            // Not a duplicate, add it to the seen set
            seen.add(current.value);
            prev = current; // Move prev to current
        }
        current = current.next; // Move to the next node
    }

    return head; // Return the modified list
}

// Helper function to create a linked list from an array for testing
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print the linked list (for testing)
function printLinkedList(head) {
    let current = head;
    let output = [];
    while (current !== null) {
        output.push(current.value);
      