/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // Two pointer index
  let l = 0
  let h = 1
  while (h < nums.length) {
    if (nums[l] === 0) {
      if (nums[h] !== 0) {
        ;[nums[l], nums[h]] = [nums[h], nums[l]]
        l++
        h++
      } else {
        h++
      }
    } else {
      l++
      h++
    }
  }
}
// @lc code=end
