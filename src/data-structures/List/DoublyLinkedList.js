// DoublyLinkedList.js

// 辅助节点构造函数
var Node = function (item) {
  this.item = item;
  this.prev = null;
  this.next = null;
};

// 双向链表构造函数
function DoublyLinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null; // 指向链表最后一项节点(指向最后一个位置，不是最后加入的节点)
}
module.exports = DoublyLinkedList;

// 插入节点
DoublyLinkedList.prototype.insert = function (position, item) {
  if (position > -1 && position <= length) {
    var node = new Node(item);
    var current = head;
    var previous;
    var index = 0;
    // 第一项插入
    if (position === 0) {
      if (!head) {
        head = node;
        tail = node;
      } else {
        node.next = current;
        current.prev = node;
        head = node;
      }
      // 最后插入
    } else if (position === length) {
      current = tail;
      current.next = node;
      node.prev = current;
      tail = node;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = node;
      node.prev = previous;
      node.next = current;
      current.prev = node;
    }
    length += 1;
    return true;
  } else {
    return false;
  }
};

// 删除节点
DoublyLinkedList.prototype.removeAt = function (position) {
  if (position > -1 && position < length) {
    var current = head;
    var previous;
    var index = 0;
    if (position == 0) {
      current = current.next;
      current.prev = null;
      head = current;
    } else if (position == length - 1) {
      current = tail;
      current = current.prev;
      current.next = null;
      tail = current;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      // 注意这里不要直接将current直接指向current.next后面是需要返回当前节点的
      previous.next = current.next;
      current.next.prev = previous;
    }
    length -= 1;
    return current.item;
  } else {
    return null;
  }
};
