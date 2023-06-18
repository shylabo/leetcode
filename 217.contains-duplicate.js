/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // ===================
  // HashSet: tc: O(1), sc: O(n)
  // ===================
  // const set = new Set(nums)
  // return nums.length > set.size

  // ===================
  // Sort & Loop: tc: O(nlogn), sc: O(1)
  // ===================
  nums.sort()
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) return true
  }
  return false
}
// @lc code=end
