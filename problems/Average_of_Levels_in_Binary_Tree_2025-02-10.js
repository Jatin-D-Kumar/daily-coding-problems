
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function averageOfLevels(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        let levelSum = 0;
        let levelCount = queue.length;

        for (let i = 0; i < levelCount; i++) {
            const node = queue.shift();
            levelSum += node.val;

            if (node.lef