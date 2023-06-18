/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let magazineMap = new Map()
  for (const ch of magazine) {
    if (magazineMap.has(ch)) {
      // has key case
      magazineMap.set(ch, magazineMap.get(ch) + 1)
    } else {
      // doesn't have key case
      magazineMap.set(ch, 1)
    }
  }
  // {
  //   a => 1
  //   b => 2
  // }
  for (const ch of ransomNote) {
    if (magazineMap.has(ch)) {
      // has key case
      if (magazineMap.get(ch) - 1 < 0) return false
      magazineMap.set(ch, magazineMap.get(ch) - 1)
    } else {
      // doesn't have key case
      return false
    }
  }

  return true
}
// @lc code=end
