// Dictionary.test.js
const Dictionary = require("./Dictionary.js");

const dic = new Dictionary();
dic.set("bob", "bob@qq.com");
dic.set("tom", "tom@126.com");
dic.set("john", "john@163.com");
console.log(dic.has("bob")); // true
console.log(dic.size()); // 3
console.log(dic.get("bob")); // bob@qq.com
dic.remove("bob");
console.log(dic.get("bob")); // undefined
console.log(dic.size()); // 2
console.log(dic.keys()); // [ 'tom', 'john' ]
console.log(dic.values()); // [ 'tom@126.com', 'john@163.com' ]
console.log(dic.getItems()); // { tom: 'tom@126.com', john: 'john@163.com' }
