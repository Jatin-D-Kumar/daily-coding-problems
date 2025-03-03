
// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function partition(head, x) {
    // Create two new lists: one for nodes less than x, and one for nodes greater than or equal to x
    let lessHead = new ListNode(0); // Dummy head for the less than x list
    let greaterHead 