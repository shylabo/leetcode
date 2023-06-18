/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // =======================
  // Two Pointer
  // =======================
  // s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
  // if (s.length === 0 || s.length === 1) return true
  // let fPointer = 0
  // let bPointer = s.length - 1
  // while (fPointer < bPointer) {
  //   if (s[fPointer] !== s[bPointer]) return false
  //   fPointer++
  //   bPointer--
  // }
  // return true
  // =======================
  // Reverse String
  // =======================
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
  let reversed = s.split('').reverse().join('')

  return reversed === s
}
// @lc code=end
