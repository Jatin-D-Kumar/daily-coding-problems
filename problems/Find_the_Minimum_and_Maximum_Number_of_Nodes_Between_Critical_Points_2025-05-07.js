
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findMinMaxBetweenCriticalPoints(head) {
    if (!head || !head.next || !head.next.next) {
        return [-1, -1]; // Not enough nodes for critical points
 