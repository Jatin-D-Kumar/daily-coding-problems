
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, value) {
        this.adjacencyList[vertex1].push({ node: vertex2, value });
        this.adjacencyList[vertex2].push({ node