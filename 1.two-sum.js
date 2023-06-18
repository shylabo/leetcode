/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // ============
  // brute force
  // ============
  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) return [i, j]
  //   }
  // }

  // ============
  // Hash map: Two loop
  // ============
  // let numsMap = new Map()
  // for (let i = 0; i < nums.length; i++) {
  //   // numsMap[nums[i]] = i
  //   numsMap.set(nums[i], i)
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   let complement = target - nums[i]
  //   if (numsMap.has(complement) && numsMap.get(complement) !== i) {
  //     return [i, numsMap.get(complement)]
  //   }
  // }

  // ============
  // Hash map: Two loop
  // ============
  let numsMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i] //2
    if (numsMap.has(complement)) {
      return [numsMap.get(complement), i]
    }
    numsMap.set(nums[i], i)
  }
}
// @lc code=end
