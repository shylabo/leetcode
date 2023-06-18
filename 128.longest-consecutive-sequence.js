/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0

  const set = new Set(nums)
  let max = 0
  for (const num of set) {
    if (set.has(num - 1)) continue
    let curr = num
    let currMax = 1
    while (set.has(curr + 1)) {
      curr++
      currMax++
    }
    max = Math.max(max, currMax)
  }
  return max
}
// @lc code=end
