
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
        return [-1, -1]; // Less than 2 critical points
    }

    // Calculate the minimum and maximum distance between critical points
    let minDistance = Infinity;
    let maxDistance = 0;

    for (let i = 1; i < criticalPoints.length; i++) {
        let distance = criticalPoints[i] - criticalPoints[i - 1];
        minDistance = Math.min(minDistance, distance);
        maxDistance = Math.max(maxDistance, distance);
    }

    return [minDistance, maxDistance];
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNo