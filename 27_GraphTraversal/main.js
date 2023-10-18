/**
 * Graph traversal uses
 * - peer to peer networking
 * - webcrawlers
 * - finding closest matches / recommendations
 * - shortest path problems: GPS nav, solving mazes, AI
 */
class Graph {
    constructor() {
        this.adjacencyList = {};
    };

    addVertex(vertex) {

        // in the real world we would not want to overwrite existing values
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

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

    removeVertex(vertex) {

        // we will pop off items as we go and when it hits zero, will stop 
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
            if (this.adjacencyList[adjacentVertex].length === 0) delete this.adjacencyList[adjacentVertex];
        };
        delete this.adjacencyList[vertex];
    };

    /**
     * Depth-first graph traversal
     * - we seek child nodes before sibling nodes
     * 
     * General Steps
     * (1) if vertex is empty, return
     * (2) add vertex to results list
     * (3) mark vertex as visited
     * (4) for each neighbor in vertex's neighbors:
     * (4a) if neighbor is not visited:
     * (4a1) recursively call dfs() on neighbor
     * 
     * Pseudocode
     * (1) function should accept a starting node
     * (2) create a list to store the end result, to be returned at the very end
     * (3) create an object to store visited vertices
     * (4) create a helper func with accepts a vertex
     * (4a) the helper func should return early if the vertex is empty
     * (4b) the helper func should place the vertex it accepts into the visited object and push that vertex into the result array
     * (4c) loop over all of the values inthe adjacencyList for that vertex
     * (4d) if any of those values have not been visited, recursively invoke the helper function with that vertex
     * (5) invoke the helper func with the starting vertex
     */
    depthFirstSearchRecursive(start) {
        let list = [];
        let visited = {};

        // the context of this will change in the helper func
        const adjacencyList = this.adjacencyList;

        // immediately-invoked function expression IIFE
        // executed immediately after created
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            list.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                
                // if *not* been visited
                if (!visited[neighbor]) return dfs(neighbor);
            });
        })(start);

        return list;
    };

    /**
     *  Pseudocode
     * (1) function should accept starting node
     * (2) create a stack to help keep track of vertices (list/array)
     * (3) create a list to store the end result
     * (4) create an obj to store visited vertices
     * (5) add the starting vertex to the stack, and mark it visited
     * (6) while the stack has something in it:
     * (6a) pop the next vertex from the stack
     * (6b) if that vertex hasnt been visited yet:
     * (6b1) mark it as visited
     * (6b2) add it to the result list
     * (6b3) push all of its neighbors into the stack
     */
    depthFirstSearchIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {

            // take from end of stack
            currentVertex = stack.pop();
            
            // push into our result array
            result.push(currentVertex);

            // now iterate over its neighbors
            this.adjacencyList[currentVertex].forEach(neighbor => {
                
                // if this vertex hasnt already been visited...
                if (!visited[neighbor]) {
                    
                    // mark as visited
                    visited[neighbor] = true;

                    // push into the stack
                    stack.push(neighbor);
                };
            });
        };
        return result;
    };

    /**
     *  Breadth-first search
     * - how does one distinguish this from normal search pattern?
     * - we visit all neighbors of a node first, then those neighbors neighbors
     * 
     * Pseudocode
     * (1) accepts a starting vertex
     * (2) create a queue (you can use an array) and place the starting vertex in it 
     * (3) create an array to store the nodes visited
     * (4) create an obj to store nodes visited
     * (5) mark the starting vertex as visited
     * (6) loop as long as there is anything in the queue
     * (7) remove the first vertex from the queue and push it into the array that stores nodes visited
     * (8) loop over each vertex in the adjacency list for the vertex you are visiting
     * (9) if it is not inside the obj that stores the nodes visisted, mark it as visited and enqueue that vertex
     * (10) return the array of visited nodes
     */
    breadthFirst(start) {
        const queue = [start]; // queue is our array of nodes to check
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {

            // pluck from start of queue
            currentVertex = queue.shift();

            // push into our result array
            result.push(currentVertex);

            // now check if neighbors have been visited
            this.adjacencyList[currentVertex].forEach(neighbor => {

                // check if not been visited
                if (!visited[neighbor]) {

                    // mark as visited
                    visited[neighbor] = true;

                    // add it to the queue to check its neighbors
                    queue.push(neighbor);

                    // its value will be added to the result array during the loop when it is come across in the queue

                };

            });

        };

        return result;
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
console.log(graph.depthFirstSearchRecursive("LA"));
console.log(graph.depthFirstSearchIterative("LA"));
console.log(graph.breadthFirst("LA"));