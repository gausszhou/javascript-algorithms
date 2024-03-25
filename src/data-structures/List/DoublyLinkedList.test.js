// DoublyLinkedList.test.js
const DoublyLinkedList = require("./DoublyLinkedList.js");
const doubleLink = new DoublyLinkedList();
doubleLink.insert(0, 1);
doubleLink.insert(1, 2);
doubleLink.insert(2, 3);
console.log(doubleLink.removeAt(1));
