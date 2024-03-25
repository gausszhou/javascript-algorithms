// HashTable.test.js
const HashTable = require("./HashTable.js");

const hash = new HashTable(1024);

hash.put("bob", "bob@qq.com");
hash.put("tom", "tom@126.com");
hash.put("john", "john@163.com");
console.log(hash.get("bob")); // bob@qq.com
hash.remove("bob");
console.log(hash.get("bob")); // undefined
