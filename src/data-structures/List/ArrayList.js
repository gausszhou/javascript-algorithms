// ArrayList.js
function ArrayList(num) {
  this.arr = [];
  this.arrLength = num;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

module.exports = ArrayList;

// 打印所有成员
ArrayList.prototype.toString = function () {
  return this.arr.join();
};

// 初始化连续数组
ArrayList.prototype.init = function () {
  this.arr = [];
  for (let i = 0; i < this.arrLength; i++) {
    this.arr.push(i);
  }
};
// 打乱 洗牌算法
ArrayList.prototype.shuffle = function () {
  const arr = this.arr;
  let len = arr.length;
  while (len) {
    let idx = parseInt(Math.random() * len);
    [arr[len - 1], arr[idx]] = [arr[idx], arr[len - 1]];
    len--;
  }
};
// 检查是否排序
ArrayList.prototype.check = function () {
  const arr = this.arr;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

// 排序 冒牌排序
ArrayList.prototype.bubbleSort = function () {
  const arr = this.arr;
  const length = arr.length;
  for (let i = length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

// 选择排序 在冒泡的基础上减少了交换操作
ArrayList.prototype.selectionSort = function () {
  const arr = this.arr;
  let length = arr.length;
  var indexMin = 0;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      // 比较大小，选择小的
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(arr, i, indexMin);
    }
  }
};

// 插入排序 每一轮都排好前面一部分的顺序
ArrayList.prototype.insertionSort = function () {
  const arr = this.arr;
  let length = arr.length;
  let j, temp;
  for (let i = 1; i < length; i++) {
    j = i;
    temp = arr[i];
    // 前面的都排好了，后面的比较排序，符合顺序就跳出循环
    while (j > 0 && arr[j - 1] > temp) {
      swap(arr, j, j - 1);
      j--;
    }
    arr[j] = temp;
  }
};

//  归并排序  时间复杂度 nlogn 空间复杂度 nlogn
ArrayList.prototype.mergeSort = function () {
  const arr = this.arr;
  this.arr = mergeSortRec(arr);
};

function mergeSortRec(array) {
  let length = array.length;
  if (length === 1) {
    return array;
  }
  let mid = Math.floor(length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, length);
  return merge(mergeSortRec(left), mergeSortRec(right));
}
function merge(leftArr, rightArr) {
  let result = [];
  let left = 0; // 左数组 指针
  let right = 0; // 右数组 指针
  // 左右数组依次比较 小的入栈
  while (left < leftArr.length && right < rightArr.length) {
    if (leftArr[left] < rightArr[right]) {
      result.push(leftArr[left]);
      left++;
    } else {
      result.push(rightArr[right]);
      right++;
    }
  }
  // 处理不用比较的漏网之鱼
  while (left < leftArr.length) {
    result.push(leftArr[left]);
    left++;
  }
  while (right < rightArr.length) {
    result.push(rightArr[right]);
    right++;
  }
  return result;
}

// 快速排序 最常用排序 nlogn
// 1. 选择一项作为主元
// 2. 创建左右指针 指针当前元素和主元进行比较 小的放一边，大的放另一边
// 3. 递归
ArrayList.prototype.quickSort = function () {
  const arr = this.arr;
  quick(arr, 0, arr.length - 1);
};

function quick(array, left, right) {
  let index;
  if (array.length > 1) {
    // 划分
    index = partition(array, left, right);
    // 递归
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
}

function partition(array, left, right) {
  // 选择中间作为主元
  let pivot = array[Math.floor((left + right) / 2)];
  // 定义左右移动指针
  let i = left;
  let j = right;
  while (i <= j) {
    // 正常
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    // 处理需要交换的两个目标
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}
