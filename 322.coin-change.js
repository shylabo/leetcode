/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0
  }

  let coinNum = 0
  coins.sort((a, b) => a - b)
  while (coins.length) {
    const coin = coins.pop()
    console.log('coin', coin)
    coinNum += Math.floor(amount / coin)
    amount = amount % coin
    console.log(coinNum, amount)
  }
  if (coinNum > 0 && amount === 0) {
    return coinNum
  }
  return -1
}
// @lc code=end
