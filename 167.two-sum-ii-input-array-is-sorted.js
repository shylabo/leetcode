/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  /**
   * Two pointers (Accepted)
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  let low = 0
  let high = numbers.length - 1
  while (low < high) {
    const sum = numbers[low] + numbers[high]
    if (sum === target) {
      return [low + 1, high + 1]
    } else if (sum < target) {
      low++
    } else {
      high--
    }
  }
  return [-1 - 1]

  /**
   * Two pointers (Time exceeded)
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  let left = 0
  let right = 1
  while (left < numbers.length - 1) {
    const sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    }
    if (right === numbers.length - 1) {
      left++
      right = left + 1
    } else {
      right++
    }
  }
  return [-1, -1]
}
// @lc code=end
