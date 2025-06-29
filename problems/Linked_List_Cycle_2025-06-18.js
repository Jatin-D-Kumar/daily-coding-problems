
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

// Example usage:
// Creating a linked list: 3 -> 2 -> 0 -> -4
// and then creating a cycle: -4 -> 2
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creating a cycle

console.log(hasCycle(node1)); // Output: true
