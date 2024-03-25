// LinkedList.test.js
const LinkedList = require("./LinkedList.js.js.js");
const list = new LinkedList();
list.append(1);
console.log(list.toString() == "1");
list.append(2);
console.log(list.toString() == "12");
list.append(3);
console.log(list.toString() == "123");
console.log(list.indexOf(3) == 2);
list.remove(2);
console.log(list.toString() == "13");
console.log(list.indexOf(3) == 1);
console.log(list.isEmpty() == false);
console.log(list.size() == 2);
console.log(list.getHead() == list.get(0));
