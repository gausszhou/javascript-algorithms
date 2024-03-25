// Stack.1.js
const Stack = require("./Stack.js");
function baseConverter(decNumber, base) {
  let remStack = new Stack();
  let rem = 0;
  let = baseString = "";
  let digits = "0123456789ABCDEF";
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; //{7}
  }
  return baseString;
}
console.log(baseConverter(1234567890123456, 2));
