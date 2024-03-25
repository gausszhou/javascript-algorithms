// Hashtable.js

// 引入链表数据结构
const LinkedList = require("../list/LinkedList.js");

// 构造一个散列函数
const loseloseHashCode = function (key) {
  let hash = 5381; // magic number
  const size = 1543; // hash size
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 33 + key.charCodeAt(i)) % size; // 这个公式可以让结果尽可能的让这个数和2的32次方互质
  }
  return hash; // 设置散列长度
};

// 构造一个键值对
var ValuePair = function (key, value) {
  this.key = key;
  this.value = value;
  this.toString = function () {
    return "[" + this.key + "," + this.value + "]";
  };
};

function HashTable(length) {
  this.table = [];
}

module.exports = HashTable;

HashTable.prototype.put = function (key, value) {
  const table = this.table;
  const position = loseloseHashCode(key);
  if (table[position] == undefined) {
    table[position] = new LinkedList();
  }
  table[position].append(new ValuePair(key, value));
};

HashTable.prototype.remove = function (key) {
  const table = this.table;
  const position = loseloseHashCode(key);
  if (table[position] !== undefined) {
    let current = table[position].getHead();
    // 链表长度不为一 进入循环
    while (current.next) {
      if (current.item.key === key) {
        table[position].remove(key);
        // 检查链表是否为空
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
      //移动指针
      current = current.next;
    }
    // 检查第一个或最后一个
    if (current.item.key === key) {
      table[position].remove(key);
      if (table[position].isEmpty()) {
        table[position] = undefined;
      }
      return true;
    }
  }
  return false;
};

HashTable.prototype.get = function (key) {
  const table = this.table;
  const position = loseloseHashCode(key);
  if (table[position] !== undefined) {
    let current = table[position].getHead();
    while (current.next) {
      if (current.item.key === key) {
        return current.item.value;
      }
      current = current.next;
    }
    // 检查第一个或最后一个
    if (current.item.key === key) {
      return current.item.value;
    }
    return undefined;
  }
};

HashTable.prototype.set = function (key, value) {};
