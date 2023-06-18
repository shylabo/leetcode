/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let [s, e] = [newInterval[0], newInterval[1]]
  const [left, right] = [[], []]
  for (const interval of intervals) {
    if (interval[1] < s) {
      left.push(interval)
    } else if (interval[0] > e) {
      right.push(interval)
    } else {
      s = Math.min(s, interval[0])
      e = Math.max(e, interval[1])
    }
  }
  return [...left, [s, e], ...right]
}
// @lc code=end
