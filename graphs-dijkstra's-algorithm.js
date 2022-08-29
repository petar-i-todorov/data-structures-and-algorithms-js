// Graphs. Dijkstra's algorithm --------------------------------------------------------------------------------------------------------
const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

const findLowestCostNode = (costs, processed) => {
  let lowestCost = Infinity;
  let lowestCostNode;
  Object.keys(costs).forEach((node) => {
    if (!processed.includes(node)) {
      if (costs[node] < lowestCost) {
        lowestCost = costs[node];
        lowestCostNode = node;
      }
    }
  });
  return lowestCostNode;
};

const shortestPath = (startNode, graph) => {
  const costs = {};
  const processed = [];
  Object.keys(graph).forEach((node) => {
    if (node !== startNode) {
      costs[node] = graph[startNode][node] || Infinity;
    }
  });
  processed.push(startNode);
  while (processed.length <= Object.keys(graph).length) {
    const lowestCostNode = findLowestCostNode(costs, processed);
    const neighbors = graph[lowestCostNode];
    if (neighbors) {
      Object.keys(neighbors).forEach((node) => {
        if (!processed.includes(node)) {
          const newCost = costs[lowestCostNode] + graph[lowestCostNode][node];
          if (newCost < costs[node]) {
            costs[node] = newCost;
          }
        }
      });
    }
    processed.push(lowestCostNode);
  }
  return costs;
};
console.log(shortestPath("a", graph));
//complexity - O(V^2)
