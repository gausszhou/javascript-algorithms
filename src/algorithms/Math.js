/**
 * O(n)
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @returns 
 */
function mod(a, b, c) {
  let count = 0
  let ans = 1;
  for (let i = 0; i < b; i++) {
    count ++;
    ans = (ans * a) % c;
  }
  console.log(count);
  return ans;
}

/**
 * O(log2(N))
 * @param {*} a 
 * @param {*} b 
 * @param {*} n 
 * @returns 
 */
function quickMod(a, b, n) {
  let count = 0
  let ans = 1;
  while (b) {
    count ++;
    if (b & 0x1) ans = (ans * a) % n;
    a = (a * a) % n;
    b >>= 1;
  }
  console.log(count);
  return ans;
}

console.log(mod(79, 587, 391)); // 587 97
console.log(quickMod(79, 587, 391)); // 10 97