
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseKGroup(head, k) {
    // Helper function to reverse the linked list
    const reverse = (head, k) => {
        let prev = null;
        let curr = 