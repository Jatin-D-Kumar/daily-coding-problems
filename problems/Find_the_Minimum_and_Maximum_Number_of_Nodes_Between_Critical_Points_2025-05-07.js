
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findMinMaxBetweenCriticalPoints(head) {
    if (!head || !head.next || !head.next.next) {
        return [-1, -1]; // Not enough nodes for critical points
    }

    let criticalPoints = [];
    let position = 0;
    let prevNode = head;

    for (let current = head.next; current.next; current = current.next) {
        // Check if current node is a critical point
        if ((prevNode.value < current.value && current.value > current.next.value) || 
            (prevNode.value > current.value && current.value < current.next.value)) {
            criticalPoints.push(position + 1); // Store the position of the critical point
        }
        prevNode = current;
        position++;
    }

    if (criticalPoints.length < 2) {
