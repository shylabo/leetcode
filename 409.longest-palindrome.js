/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // =================
  // Hash Set
  // =================
  let result = 0
  let set = new Set()
  for (const ch of s) {
    if (set.has(ch)) {
      result += 2
      set.delete(ch)
    } else {
      set.add(ch)
    }
  }

  return set.size > 0 ? result + 1 : result
}
// @lc code=end
