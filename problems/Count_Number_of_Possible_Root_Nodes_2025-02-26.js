
function countPossibleRootNodes(edges) {
    // Create a set to keep track of all child nodes
    const childNodes = new Set();

    // Iterate through the edges to populate the childNodes set
    for (const [parent, child] of edges) {
        childNodes.add(child);
  