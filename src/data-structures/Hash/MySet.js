function MySet() {
  const items = {};
  this.has = function (value) {
    return items.hasOwnProperty(value);
  };
  this.add = function (value) {
    if (!items.hasOwnProperty(value)) {
      // 利用键名的不可重复的性质
      items[value] = value;
      return true;
    } else {
      return false;
    }
  };
  this.remove = function (value) {
    if (items.hasOwnProperty(value)) {
      delete items[value];
      return true;
    } else {
      return false;
    }
  };
  this.clear = function () {
    items = {};
  };
  this.size = function () {
    return Object.keys(items).length;
  };
  this.values = function () {
    return Object.keys(items);
  };
  this.union = function (otherSet) {
    const union = new MySet();
    this.values().forEach((item) => {
      union.add(item);
    });
    otherSet.values().forEach((item) => {
      union.add(item);
    });
    return union;
  };
  this.intersection = function (anotherSet) {
    const intersection = new MySet();
    this.values().forEach((item) => {
      if (anotherSet.has(item)) {
        intersection.add(item);
      }
    });
    return intersection;
  };
  this.difference = function (otherSet) {
    const difference = new MySet();
    this.values().forEach((item) => {
      if (!otherSet.has(item)) {
        difference.add(item);
      }
    });
    return difference;
  };
  this.subset = function (otherSet) {
    let flag = true;
    otherSet.values().forEach((item) => {
      if (!this.has(item)) {
        flag = false;
      }
    });
    return flag;
  };
}

module.exports = MySet;
