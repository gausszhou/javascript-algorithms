// Linkedlist.js
// 节点构造函数
let Node = function (item) {
  this.item = item;
  this.next = null;
};

// 链表构造函数
function LinkedList() {
  // 定义头节点指针
  this.head = null;
  // 定义链表长度
  this.length = 0;
}
module.exports = LinkedList;

// 链表中追加节点的方法 O(n)
LinkedList.prototype.append = function (item) {
  let node = new Node(item);
  let current; // 当前指针
  if (this.head === null) {
    this.head = node;
  } else {
    current = this.head;
    // 一直往后找，找到最后一项
    while (current.next) {
      current = current.next;
    }
    // 在最后一项后追加元素
    current.next = node;
  }
  // 更新链表长度
  this.length += 1;
  return true;
};

// 插入节点 O(n)
LinkedList.prototype.insert = function (position, item) {
  if (position < 0 || position > this.length) return false;
  const node = new Node(item);
  let current = this.head;
  let previous;
  let index = 0;
  if (position == 0) {
    // 在头部之前插入节点
    node.next = current;
    head = node;
  } else {
    // 一直往后找，找到index==position为止
    while (index++ < position) {
      previous = current;
      current = current.next;
    }
    // 将目标节点的前节点的后继指针指向插入节点
    previous.next = node;
    // 将插入节点的后继指针指向目标节点的后继指针
    node.next = current.next;
  }
  // 链表长度加一
  this.length++;
  // 插入操作成功，返回true
  return true;
};

// 移除指定位置的节点 O(n)
LinkedList.prototype.removeAt = function (position) {
  if (position > -1 && position < this.length) {
    let current = this.head;
    let previous;
    let index = 0;
    if (position == 0) {
      // 移除当前head节点，将head指针指向当前head的next
      head = current.next;
    } else {
      // 一直往后找，找到index==position为止
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      // 将当前节点的前节点的后继指针指向当前节点的后继指针
      previous.next = current.next;
    }
    // 链表长度减一
    this.length -= 1;
    // 返回被删除的节点
    return current.item;
  } else {
    return null;
  }
};

// 移除指定值的节点 O(n)
LinkedList.prototype.remove = function (item) {
  const index = this.indexOf(item);
  return this.removeAt(index);
};

// 找到对应节点的位置 O(n)
LinkedList.prototype.indexOf = function (item) {
  // 基本操作走一波
  let current = this.head;
  let index = 0;
  // 找到目标节点
  while (index < this.length) {
    if (item == current.item) {
      return index;
    }
    current = current.next;
    // 注意index++在这里
    index += 1;
  }
};

// 获取节点
LinkedList.prototype.get = function (order) {
  if (order > this.length) return null;
  let current = this.head;
  let index = 0;
  // 找到目标节点
  while (index < order) {
    current = current.next;
    // 注意 在这里 index++
    index += 1;
  }
  return current;
};

// 获取头节点
LinkedList.prototype.getHead = function () {
  return this.head;
};

// 判断是否为空
LinkedList.prototype.isEmpty = function () {
  return this.length == 0;
};

// 获取链表长度
LinkedList.prototype.size = function () {
  return this.length;
};

// 打印链表中的item，按顺序排列
LinkedList.prototype.toString = function () {
  let current = this.head;
  let str = "";
  while (current) {
    str += current.item;
    current = current.next;
  }
  return str;
};
