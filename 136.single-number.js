/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // +++++++++++++++++
  // Hash Set
  // +++++++++++++++++
  // let set = new Set()
  // for (const num of nums) {
  //   if (set.has(num)) set.delete(num)
  //   else set.add(num)
  // }
  // for (const val of set) {
  //   return val
  // }

  // +++++++++++++++++
  // Hash Map
  // +++++++++++++++++
  let map = new Map()
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1)
    } else {
      map.set(num, map.get(num) + 1)
    }
  }

  for (const [k, v] of map) {
    if (v === 1) return k
  }
}
// @lc code=end
