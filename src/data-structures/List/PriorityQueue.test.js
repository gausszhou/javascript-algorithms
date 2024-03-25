// 应用


var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();

// 循环队列 实现击鼓传花游戏
function hotPotato(nameList, num) {
  var queue = new Queue();
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }
  var eliminated = "";
  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + "在击鼓传花中被淘汰");
  }
  return queue.dequeue();
}

var names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
var winner = hotPotato(names, 7);
console.log("胜利者:" + winner);
