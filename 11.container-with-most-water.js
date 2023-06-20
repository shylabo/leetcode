/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    ans = Math.max(ans, Math.min(height[left], height[right]) * (right - left))
    height[left] < height[right] ? left++ : right--
  }
  return ans
}
// @lc code=end
