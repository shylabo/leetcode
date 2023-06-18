/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // =================
  // Sort: tc: O(nlogn), sc: O(1)
  // =================
  // nums.sort((a, b) => a - b)
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== i) return i
  // }
  // return nums.length
  // =================
  // Hash set: tc: O(n), sc: O(n)
  // =================
  let set = new Set()
  for (const num of nums) {
    set.add(num)
  }
  for (let i = 0; i < nums.length + 1; i++) {
    if (!set.has(i)) return i
  }
}
// @lc code=end
