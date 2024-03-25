function solution1(s1, s2) {
  let count = 0;
  // 定义 dp[i,j] 返回 s1[0...i] 和 s2[0...j] 的最小编辑距离
  function dp(i, j) {
    count++;
    // base case
    if (i == -1) return j + 1;
    if (j == -1) return i + 1;
    if (s1[i] === s2[j]) {
      return dp(i - 1, j - 1); // 跳过
    } else {
      return Math.min(
        dp(i, j - 1) + 1, // 插入
        dp(i - 1, j) + 1, // 删除
        dp(i - 1, j - 1) + 1 // 替换
      )
    }
  }
  const res = dp(s1.length - 1, s2.length - 1)
  console.log(count)
  return res;
}

console.log(solution1("horse", "ros") === 3) // 77 true
console.log(solution1("intention", "execution") === 5)// 1709 true


function solution2(s1, s2) {
  let count = 0;
  // 定义 dp[i,j] 返回 s1[0...i] 和 s2[0...j] 的最小编辑距离
  const cache = {}
  function dp(i, j) {
    count++;
    // base case
    if (i == -1) return j + 1;
    if (j == -1) return i + 1;
    const key = i + '-' + j;
    // 备忘录 取
    if (cache[key]) return cache[key]
    // 备忘录 存
    if (s1[i] === s2[j]) {
      cache[key] = dp(i - 1, j - 1); // 跳过
    } else {
      cache[key] = Math.min(
        dp(i, j - 1) + 1, // 插入
        dp(i - 1, j) + 1, // 删除
        dp(i - 1, j - 1) + 1 // 替换
      )
    }
    return cache[key];
  }
  const res = dp(s1.length - 1, s2.length - 1)
  console.log(count)
  return res;
}

console.log(solution2("horse", "ros") === 3) // 28 true
console.log(solution2("intention", "execution") === 5)// 76 true