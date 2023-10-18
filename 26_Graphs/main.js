/**
 * When graphs are used:
 * - recommendations on streaming services
 * - networks on social media or websites
 * 
 * Undirected graph
 * - no polarity or direction in a graph
 * - facebook friends can see each others content
 * 
 * Directed graph
 * - polarity, or direction in a graph
 * - instagram follows can be directed
 * 
 * Weighted graph
 * - edges have values associated with them
 * - maps are weighted in the sense that the edges are roads with a distance
 * 
 * Unweighted graph
 * - edges have no value associated with them
 * 
 * Adjacency Matrix
 * - can represent through a boolean matrix
 * 
 * Adjacency List
 * - can instead store with an array, hashmap, etc
 */

/**
 * Undirected graph
 */
class Graph {
    constructor() {
        this.adjacencyList = {};
    };

    /**
     * Adding a vertex
     * (1) Accepts a name of a vertex
     * (2) Should add a key to the adjacency list with the name of the vertex
     * and set its value to be an empty array
     * @param {*} vertex 
     */
    addVertex(vertex) {

        // in the real world we would not want to overwrite existing values
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

    /**
     * Adding an edge
     * (1) func should accept two vertices
     * (2) find in the adjacencyList the key of vertex1 and push vertex2 to the array
     * (3) find in the adjacencyList the key of vertex2 and push vertex1 to the array
     * (4) dont worry about handling errors/invalid vertices...for now!
     */
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    };

    removeEdge(vertex1, vertex2) {

        // filter all the values excluding the removed verted
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    };

    /**
     * Must remove the vertex and all references to that vertex in other arrays
     * @param {*} vertex 
     */
    removeVertex(vertex) {

        // we will pop off items as we go and when it hits zero, will stop 
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
            if (this.adjacencyList[adjacentVertex].length === 0) delete this.adjacencyList[adjacentVertex];
        };
        delete this.adjacencyList[vertex];
    };
};

var graph = new Graph();
graph.addVertex("Tokyo")
graph.addVertex("SF")
graph.addVertex("LA")
graph.addVertex("NYC")
graph.addEdge("LA", "SF")
graph.addEdge("NYC", "SF")
graph.addEdge("LA", "Tokyo")
console.log(graph)
graph.removeVertex("LA")
console.log(graph)