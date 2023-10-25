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

/**
 * Simple queue for our exercise
 * sorting by O(n log n)
 * - faster to use a heap
 * - FIFO
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

/**
 * Our graph will be weighted which is necessary for Dijkstra's Algorithm to work
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

    /**
     * Dijkstra's Pseudocode
     * (1) function should accept a starting and ending vertex
     * (2) create an object (we will call it distances) and set each key to be every vertex
     * in the adjacency list with a value of infinity, except for the starting vertex which
     * should have a value of zero
     * (3) after setting a value in the distances obj, add each vertex with a priority of ifinity
     * to the priority queue, except the starting vertex, which should have a priority of zero
     * bc thats where we begin
     * (4) create another obj called previous and set each key to be every vertex in the adjacency
     * list with a value of null
     * (5) start looping as long as there is anything in the priority queue
     * (5a) dequeue a vertex from the prority queue
     * (5b) if that vertex is the same as the ending vertex, we are done!
     * (5c) otherwise, loop through each value in the adjacency list at that vertex
     * (5c1) calculate the distance to that vertex from the starting vertex
     * (5c2) if the distance is less than what is currently stores in our distances obj:
     * (5c2a) update the distances object with new lower distance
     * (5c2b) update the prev object to contain that vertex
     * (5c2c) enqueue the vertex with the total distance from the start node
     */
    Dijkstra(start, finish) {

        // create our priority queue
        const nodes = new PriorityQueue();

        // create our distances object
        const distances = {};

        // create our prev node object which will track which prev node was the shortest distance to it
        const previous = {};

        // build up the initial state: our node distances, priorities, and prev values
        // we will loop over the entire adjacencyList 
        for (let vertex in this.adjacencyList) {

            // for distances, set each value to be infinity except the first one
            // for nodes, enqeue each with a priority of infinity except for the first one
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else { 
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            };

            // start each vertex with a prev value of null
            previous[vertex] = null;
        };

        let smallest;
        const path = [];

        // as long as there is something to visit
        while (nodes.values.length) {

            // this will give us the node with the lowest priority / smallest distance
            smallest = nodes.dequeue().val;
            
            // finished here
            if (smallest === finish) {
                // we are done and need to build up path to end
                while (previous[smallest]) {

                    // this works backwards and ends at the start bc it is null
                    path.push(smallest);
                    smallest = previous[smallest];

                };
                break;
            };

            if (smallest || distances[smallest] !== Infinity) {
                // now we look at each neighbor of a node
                for (let neighbor in this.adjacencyList[smallest]) {
                
                    // we must get the edge of the neighbor
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    
                    // now we compare to the next nodes distance distance...
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {

                        // update the new smallest distance to the neighboring node
                        distances[nextNeighbor] = candidate; 

                        // now we update which prev is the shortest distance away from this node
                        previous[nextNeighbor] = smallest;

                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    };

                };
            };

        };

        // add our starting point and reverse the order
        return path.concat(smallest).reverse();
    };
    
};



var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


const ans = graph.Dijkstra("A", "E");
console.log({ans});

// ["A", "C", "D", "F", "E"]