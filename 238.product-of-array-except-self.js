/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  /**
   * Nested Loop (Not meet requirement)
   * Time Complexity: O(n^2)
   * Space Complexity: O(n)
   */
  const resultArr = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    let product = 1
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        product *= 1
      } else {
        product *= nums[j]
      }
    }
    resultArr[i] = product
  }
  return resultArr

  /**
   * Left and Right Product Lists
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  const left = new Array(nums.length)
  const right = new Array(nums.length)
  const lastIdx = nums.length - 1
  /**
   * Get left and right products
   * e.g. nums = [4,5,1,8,2,10,6]
   * left = [1,4,20,20,160,320,3200]
   * right = [4800,960,960,120,60,6,1]
   */
  for (let i = 0; i <= lastIdx; i++) {
    if (i === 0) {
      left[i] = 1
      right[lastIdx] = 1
    } else {
      left[i] = nums[i - 1] * left[i - 1]
      right[lastIdx - i] = nums[lastIdx - i + 1] * right[lastIdx - i + 1]
    }
  }
  /**
   * Answer is product of each element in left and right
   */
  for (let i = 0; i <= lastIdx; i++) {
    nums[i] = left[i] * right[i]
  }
  return nums
}
// @lc code=end
