/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  // =====================
  // Stack : tc: O(m + n), sc: O(m + n)
  // =====================
  let sStack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') sStack.push(s[i])
    else sStack.pop()
  }

  let tStack = []
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== '#') tStack.push(t[i])
    else tStack.pop()
  }

  return sStack.join('') === tStack.join('')
}
// @lc code=end
