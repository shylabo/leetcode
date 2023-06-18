/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set()
  let maxNumCount = 1
  let numCount = 0
  for (const ch of s) {
    if (!set.has(ch)) {
      numCount++
      if (numCount > maxNumCount) {
        maxNumCount = numCount
      }
    } else {
      set = new Set()
      numCount = 0
    }
  }

  return maxNumCount
}
// @lc code=end
