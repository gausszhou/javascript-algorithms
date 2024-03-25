// BinarySearchTree.js

// 构造一个节点
const Node = function (key) {
  this.key = key;
  this.left = null;
  this.right = null;
};

function BinarySearchTree() {
  this.root = null;
}

module.exports = BinarySearchTree;

// 插入
BinarySearchTree.prototype.insert = function (key) {
  var newNode = new Node(key);
  if (this.root === null) {
    this.root = newNode;
  } else {
    insertNode(this.root, newNode);
  }
  // 定义一个节点插入函数
  function insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }
};

// 移除
BinarySearchTree.prototype.remove = function (key) {
  this.root = removeNode(this.root, key);
  function removeNode(node, key) {
    if (node === null) return null;
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      // 找到了节点
      // 第一种情况，叶子节点
      if (node.left === null && node.right == null) {
        return null;
      }
      // 第二种情况，只有一个子节点的节点
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      // 第三种情况，两个子节点的情况
      let aux = findMinNode(node.right); // 找到右子树的最小值，替换
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key); // 删除右子树的最小值的节点
      return node;
    }
  }

  function findMinNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    return null;
  }
};

// 前序遍历
BinarySearchTree.prototype.preOrderTraverseNode = function (callback) {
  traverse(this.root, callback);
  function traverse(node, callback) {
    if (node !== null) {
      callback(node.key);
      traverse(node.left, callback);
      traverse(node.right, callback);
    }
  }
};

// 中序遍历
BinarySearchTree.prototype.inOrderTraverseNode = function (callback) {
  traverse(this.root, callback);
  function traverse(node, callback) {
    if (node !== null) {
      traverse(node.left, callback);
      callback(node.key);
      traverse(node.right, callback);
    }
  }
};

// 后序遍历
BinarySearchTree.prototype.postOrderTraverseNode = function (callback) {
  traverse(this.root, callback);
  function traverse(node, callback) {
    if (node !== null) {
      traverse(node.left, callback);
      traverse(node.right, callback);
      callback(node.key);
    }
  }
};

// 最小值
BinarySearchTree.prototype.min = function () {
  let node = this.root;
  if (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node.key;
  }
  return null;
};

// 最大值
BinarySearchTree.prototype.max = function () {
  let node = this.root;
  if (node) {
    while (node && node.right !== null) {
      node = node.right;
    }
    return node.key;
  }
  return null;
};

// 搜索
BinarySearchTree.prototype.search = function (key) {
  return searchNode(this.root, key);
  function searchNode(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  }
};
