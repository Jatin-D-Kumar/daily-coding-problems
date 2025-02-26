
function countPossibleRootNodes(edges) {
    // Create a set to keep track of all child nodes
    const childNodes = new Set();

    // Iterate through the edges to populate the childNodes set
    for (const [parent, child] of edges) {
        childNodes.add(child);
    }

    // The total number of nodes is the number of unique parents plus unique children
    const allNodes = new Set();
    for (const [parent, child] of edges) {
        allNodes.add(parent);
        allNodes.add(child);
    }

    // The possible root nodes are those that are not in the childNodes set
    let possibleRootCount = 0;
    for (const node of allNodes) {
        if (!childNodes.has(nod