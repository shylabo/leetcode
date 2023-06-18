/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let sum = 0

  for (let i = 0; i < s.length - 1; i++) {
    const currChar = s[i] // e.g. X
    const nextChar = s[i + 1] // e.g. C
    if (symbolMap[currChar] < symbolMap[nextChar]) {
      sum -= symbolMap[currChar]
    } else {
      sum += symbolMap[currChar]
    }
  }

  return sum + symbolMap[s.slice(-1)]
}
// @lc code=end
