
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false; // If the list is empty or has only one node