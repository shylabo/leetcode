/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = new Array()
  let map = new Map()
  map.set(')', '(')
  map.set('}', '{')
  map.set(']', '[')

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      stack.push(s[i])
    } else {
      let popElm = stack.pop()
      if (popElm !== map.get(s[i])) return false
    }
  }
  return stack.length === 0
}
// @lc code=end
