export default class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(name) {
    this.adjacencyList.set(name, new Set());
  }

  hasNode(name) {
    if (this.adjacencyList.get(name)) {
      return true;
    }
    return false;
  }

  createEdge(nodeOne, nodeTwo) {
    this.adjacencyList.get(nodeOne).add(nodeTwo);
    this.adjacencyList.get(nodeTwo).add(nodeOne);
  }

  hasEdge(nodeOne, nodeTwo) {
    if (this.adjacencyList.get(nodeOne).has(nodeTwo)) {
      return true;
    }
    return false;
  }

  removeEdge(nodeOne, nodeTwo) {
    this.adjacencyList.get(nodeOne).delete(nodeTwo);
    this.adjacencyList.get(nodeTwo).delete(nodeOne);
  }

  removeNode(name) {
    if (this.adjacencyList.has(name)) {
      this.adjacencyList.get(name).forEach((edge) => {
        this.adjacencyList.get(edge).delete(name);
      });
      this.adjacencyList.delete(name);
    }
  }
}