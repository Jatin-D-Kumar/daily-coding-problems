
function levelOrderBottom(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (