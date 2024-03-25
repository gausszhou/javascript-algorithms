const BinarySearchTree = require("./BinarySearchTree.js");

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(6);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(8);
tree.insert(1);
tree.insert(9);

console.log("前序遍历");
tree.preOrderTraverseNode((value) => {
  console.log(value);
});

console.log("中序遍历");
tree.inOrderTraverseNode((value) => {
  console.log(value);
});

console.log("后序遍历");
tree.postOrderTraverseNode((value) => {
  console.log(value);
});

console.log("min", tree.min()); // 1
console.log("max", tree.max()); // 9
console.log("search(6):", tree.search(6)); // true
console.log("search(2)", tree.search(2)); // false
tree.remove(6);
console.log("search(6):", tree.search(6)); // false
