function Dictionary() {
  const items = {};

  this.set = function (key, value) {
    items[key] = value;
  };
  this.get = function (key) {
    if (this.has(key)) {
      return items[key];
    } else {
      return undefined;
    }
  };
  this.has = function (key) {
    return items.hasOwnProperty(key);
  };
  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    } else {
      return false;
    }
  };

  this.keys = function () {
    return Object.keys(items);
  };
  this.values = function () {
    return Object.keys(items).map((key) => {
      return items[key];
    });
  };
  this.size = function () {
    return this.values().length;
  };
  this.getItems = function () {
    return items;
  };
}

module.exports = Dictionary;
