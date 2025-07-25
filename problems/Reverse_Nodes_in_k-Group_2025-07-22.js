
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
        let curr = head;
        let count = 0;
        
        while (count < k && curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            count++;
        }
        
        return [prev, curr]; // prev is the new head, curr is the next group head
    };

    let dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;

    while (true) {
        // Check if there are at least k nodes left in the list
        let kth = groupPrev;
        for (let i = 0; i < k; i++) {
            kth = kth.next;
            if (!kth) return dummy.next; // Less than k nodes remaining, exit
        }
        
        // Reverse the k nodes
        const nextGroupHead = kth.next; // Save the next group's head
        const [newGroupHead, newGroupTail] = reverse(groupPrev.next, k);
        
        // Connect reversed group with the previous part
        groupPrev.next = newGroupHead;
        newGroupTail.next = nextGroupHead;
        
        // Move the groupPrev pointer to the end of the reversed group
        groupPrev = newGroupTail;
    }
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const k = 2; // Size of groups to reverse
const newHead = reverseKGroup(head, k);

// Function to print list values
const printList = (node) => {
    let current = node;
    while (current) {
        process.stdout.write(current.val + ' ');
        current = current.next;
    }
    console.log();
};

printList(newHead); // Output should be 2 1 4 3 5 if k = 2
