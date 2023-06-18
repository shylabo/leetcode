/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // =====================
  // Brute force
  // =====================
  // let max = 0
  // for (let i = 0; i < prices.length - 1; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     if (prices[j] - prices[i] > max) {
  //       max = prices[j] - prices[i]
  //     }
  //   }
  // }
  // return max
  // =====================
  // One pass
  // =====================
  let minPrice = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice
    }
  }

  return maxProfit
}
// @lc code=end
