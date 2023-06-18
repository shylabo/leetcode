/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // ====================
  // Sort: tc: O(nlogn), sc: O(1)
  // ====================
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i]
  }
  return nums.sort((a, b) => a - b)
}
// @lc code=end
