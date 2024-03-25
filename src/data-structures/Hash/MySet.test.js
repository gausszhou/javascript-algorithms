// MySet.test.js
const MySet = require("./MySet.js");

const set = new MySet();
set.add(1);
set.add(2);
console.log(set.size()); // 2
console.log(set.values()); // [ '1', '2' ]

const set1 = new MySet();
set1.add(1);
set1.add(2);

const set2 = new MySet();
set2.add(2);
set2.add(3);

console.log(set1.union(set2).values()); // [ '1', '2', '3' ]
console.log(set1.intersection(set2).values()); //  [ '2' ]
console.log(set1.difference(set2).values()); //  [ '1' ]
console.log(set1.subset(set2)); // false
