// Queue.js
function Queue() {
  const items = [];
  this.enqueue = function (item) {
    items.push(item);
  };
  this.dequeue = function () {
    return items.shift();
  };
  this.front = function () {
    return items[0];
  };
  this.size = function () {
    return items.length;
  };
  this.isEmpty = function () {
    return items.length == 0;
  };
  this.clear = function () {
    items = [];
  };
  this.print = function () {
    console.log(items.toString());
  };
}
module.exports = Queue;
