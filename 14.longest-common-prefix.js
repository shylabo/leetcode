/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  for (let i = 0; i < strs[0].length; i++) {
    for (const str of strs) {
      if (str[i] !== strs[0][i]) return strs[0].slice(0, i)
    }
  }
  return strs[0]
  // return strs.reduce((prev, curr) => {
  //   let i = 0
  //   while (prev[i] && curr[i] && prev[i] === curr[i]) i++
  //   return prev.slice(0, i)
  // })
}
// @lc code=end
