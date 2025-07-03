
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
        current = current.next; /