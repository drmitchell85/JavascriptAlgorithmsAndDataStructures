/**
 * Eddger Dijkstra: Dutch programmer, physicist, essayist
 * - advanced CS to an academic discipline
 * 
 * Dijkstra's Algorithm
 * - algoritm to find the shortest distance between two points
 * 
 * The Approach
 * (1) every time we look to visit a new node, we pick the node
 * with the smallest known distance to visit first
 * (2) once we've moved to the node we're going to visit, 
 * we look at each of its neighbors
 * (3) for each neighboring node, we calculate the distance by
 * summing the total edges that lead to the node we're checking
 * from the starting node (!)
 * (4) if the new total distance to a node is less than the prev total,
 * we store the new shorter distance for that node
 */
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    };
};

/**
 * Simple queue for our exercise
 * sorting by O(n log n)
 * - faster to use a heap
 */
class PriorityQueue {
    constructor() {
        this.values = [];
    };

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    };

    dequeue() {
        return this.values.shift();
    };

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };
};

var graph = new WeightedGraph();
graph.addVertex("Tokyo")
graph.addVertex("SF")
graph.addVertex("LA")
graph.addVertex("NYC")
graph.addEdge("LA", "SF", 50)
graph.addEdge("NYC", "SF", 100)
graph.addEdge("LA", "Tokyo", 200)
console.log(graph.adjacencyList)
console.log(graph.adjacencyList["LA"])