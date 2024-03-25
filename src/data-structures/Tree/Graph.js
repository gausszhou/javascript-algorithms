const Dictionary = require("../hash/Dictionary.js");
const Queue = require("./Queue.js");

function Graph() {
  // 一个数组存储顶点
  var vertices = [];
  // 一个字典存储邻接表
  var adjList = new Dictionary();
  // 添加一个顶点
  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []);
  };
  // 添加边
  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };
  this.toString = function () {
    var s = "";
    // 遍历顶点
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + " -> ";
      // 获取改顶点的邻接元素
      let neighbors = adjList.get(vertices[i]);
      // 遍历邻接元素
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  };
  let initializeColor = function () {
    let color = [];
    // 遍历所有顶点 初始化颜色
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = "white";
    }
    return color;
  };
  // BFS 广度优先遍历
  // 1. 创建一个队列Q
  // 2. 将v标注为被发现的，并将v入队列Q
  // 3. 如果Q非空
  //    3.1 将u从Q中出队列
  //    3.2 将标注u为被发现的
  //    3.3 将u所有未被访问的邻点如队列
  //    3.4 将u标注为已被探索的

  // 广度优先  队列和遍历
  this.bfs = function (v, callback) {
    let color = initializeColor();
    let queue = new Queue();
    // 最短路径
    let d = [];
    let pred = [];
    queue.enqueue(v);
    for (let i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      let neighbors = adjList.get(u);
      color[u] = "grey";
      // 遍历所有邻节点
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === "white") {
          color[w] == "grey";
          d[w] = d[u] + 1; // 路径长度
          pred[w] = u; // 保存前溯点
          queue.enqueue(w);
        }
      }
      color[u] = "black";
      callback && callback(u);
    }
    return {
      distances: d,
      predecessors: pred
    };
  };
  // DFS 深度优先遍历
  //  1. 标注v为被发现
  //  2. 方位v的所有为访问邻点w
  //  3. 标注v为被探索
  // 深度优先  堆栈和递归
  this.dfs = function (callback) {
    let color = initializeColor();
    for (let i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === "white") {
        dfsVisit(vertices[i], color, callback);
      }
    }
  };
  function dfsVisit(u, color, callback) {
    color[u] = "grey";
    callback && callback(u);
    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      if (color[w] === "white") {
        dfsVisit(w, color, callback);
      }
    }
    color[u] = "black";
  }
}

module.exports = Graph;
