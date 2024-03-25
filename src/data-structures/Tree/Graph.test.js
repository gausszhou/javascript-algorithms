// Graph.test.js
const Stack = require("./Stack.js");
const Graph = require("./Graph.js");

const graph = new Graph();
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]; //{7}
for (var i = 0; i < myVertices.length; i++) {
  //{8}
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
console.log(graph.toString());
// 输出
// A -> B C D
// B -> A E F
// C -> A D G
// D -> A C G H
// E -> B I
// F -> B
// G -> C D
// H -> D
// I -> E
// Graph.path.js

function printNode(value) {
  console.log("visitred vertex: " + value);
}

graph.dfs(printNode);

let shortestPathA = graph.bfs(myVertices[0]);
console.log(shortestPathA);

// 回溯顶点，打印最短路径
let formVertex = myVertices[0];
for (let i = 1; i < myVertices.length; i++) {
  let toVertex = myVertices[i];
  let path = new Stack();
  // 回溯顶点
  for (let v = toVertex; v !== formVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(formVertex);
  // 打印路径
  let s = path.pop();
  while (!path.isEmpty()) {
    s += " - " + path.pop();
  }
  console.log(s);
}
