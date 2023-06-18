/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1

  let first = 1
  let second = 2
  for (let i = 3; i <= n; i++) {
    let third = second + first
    first = second
    second = third
  }
  return second
}
// @lc code=end
