// ArrayList.test.js
const ArrayList = require("./ArrayList.js");

let arr = new ArrayList(1024);
arr.init();

console.log("冒泡排序");
arr.shuffle();
arr.bubbleSort();
console.log(arr.check());

arr.init();
console.log("选择排序");
arr.shuffle();
arr.selectionSort();
console.log(arr.check());

arr.init();
console.log("插入排序");
arr.shuffle();
arr.insertionSort();
console.log(arr.check());

arr.init();
console.log("归并排序");
arr.shuffle();
arr.mergeSort();
console.log(arr.check());

arr.init();
console.log("快速排序");
arr.shuffle();
arr.quickSort();
console.log(arr.check());
