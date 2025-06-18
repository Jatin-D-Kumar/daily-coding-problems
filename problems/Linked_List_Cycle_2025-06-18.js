
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false; // If the list is empty or has only one node, there can't be a cycle
    }

    let slow = head; // Tortoise
    let fast = head; // Hare

    while (fast && fast.next) {
        slow = slow.next; // Move slow by one step
        fast = fast.next.next; // Move fast by two steps

        if (slow === fast) {
            return true; // There is a cycle
        }
    }

    return false; // No cycle found
}

// 