/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // =====================
  // Brute Force
  // =====================
  // let majorityNum = nums[0]
  // let majorityCount = 1
  // for (let i = 0; i < nums.length - 1; i++) {
  //   let count = 1
  //   for (let j = i + 1; j < nums.length; j++) {
  //     nums[i] === nums[j] ? count++ : null
  //   }
  //   if (majorityCount < count) {
  //     majorityCount = count
  //     majorityNum = nums[i]
  //   }
  // }

  // return majorityNum

  // =====================
  // Hash Map
  // =====================
  let map = new Map()
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1)
    } else {
      map.set(num, map.get(num) + 1)
    }
  }
  // {
  //   1 => 3
  //   2 => 4
  //   ...
  // }

  let maxVal = 0
  let maxKey = 0
  for (const [k, v] of map) {
    if (v > maxVal) {
      maxKey = k
      maxVal = v
    }
  }

  return maxKey
}
// @lc code=end
