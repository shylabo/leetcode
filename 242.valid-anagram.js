/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // ===================
  // Sort :tc O(nlogn) sc: O(1)
  // ===================
  // s = s.split('').sort().join('')
  // t = t.split('').sort().join('')
  // return s === t

  // ===================
  // Hash Map
  // ===================
  if (s.length !== t.length) return false

  // length of each should be same
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    // process for s
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
    // process for t
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) - 1)
    } else {
      map.set(t[i], -1)
    }
  }
  map.forEach((v) => {
    console.log(v !== 0)
    if (v !== 0) return false
  })

  return true
}
// @lc code=end
