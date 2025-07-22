
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
        
        return [prev, curr]; // prev is the new head