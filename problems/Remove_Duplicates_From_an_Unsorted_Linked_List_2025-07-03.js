
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
        if (seen.has(current.value)