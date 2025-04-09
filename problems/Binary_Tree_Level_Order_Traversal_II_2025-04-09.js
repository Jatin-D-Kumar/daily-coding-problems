
function levelOrderBottom(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);