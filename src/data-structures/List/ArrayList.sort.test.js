// ArrayList.sort.test.js
const ArrayList = require("./ArrayList.sort.js");

let arr = new ArrayList(16);
console.log("顺序查找");
arr.init();
arr.shuffle();
console.log(arr.toString());
console.log(arr.sequentialSearch(8));

console.log("二分查找");
arr.init();
arr.sort();
console.log(arr.toString());
console.log(arr.binarySearch(8));
