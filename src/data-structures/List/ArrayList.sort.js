// ArrayList.sort.js
const ArrayList = require("./ArrayList.js");

module.exports = ArrayList;

ArrayList.prototype.sort = function (callback) {
  this.arr.sort(callback);
};

ArrayList.prototype.sequentialSearch = function (item) {
  const arr = this.arr;
  for (let i = 0; i < arr.length; i++) {
    if (item == arr[i]) {
      return i;
    }
  }
  return -1;
};

// 二分查找 需要有序列表
ArrayList.prototype.binarySearch = function (target) {
  this.sort((a, b) => a - b);
  const arr = this.arr;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] == target) {
      return mid; // 找到了返回
    } else if (arr[mid] < target) {
      left = mid + 1; // 收缩
    } else if (arr[mid] > target) {
      right = mid - 1; // 收缩
    }
  }
  // left > right 没找到
  return -1;
};
