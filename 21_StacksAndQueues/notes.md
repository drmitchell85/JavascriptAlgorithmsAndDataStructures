# Stacks and Queues
In contrast to dictionaries, which retrieve based on key values, containers permit storage and retrieval independent of content

Containers are distinguished by the particular retrieval order they support. In the two most imporant types of containers, the retrieval order depends on the insertion order:

## Stacks
(1) Stacks support retrieval by Last In Last Out (LIFO) order. They are simple to implement and efficient. Useful when retrieval order doesnt matter, such as with batch jobs. Put and Get operations are generally referred to as push and pop

Algorithmically, LIFO tends to happen in the course of executing recursive algorithms

## Queues
(2) Queues support retrieval by First in First Out (FIFO) order. Good for handling control waiting time for services. Jobs using FIFO minimize the max time spent waiting. A bit trickier to implement than Stacks, so used for applications where order is important. Put and Get operations are generally referred to as Enqueue and Dequeue

Queues are the fundamental data structure of controlling Breadth-First Search (BFS) in graphs

Both Stacks and Queues can be implemented using arrays or linked lists. Key issue is whether an upper bound on the size of the container is known in advance, thus permitting the use of a statically allocated array