/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image
  const lenRow = image.length
  const lenCol = image[0].length
  const originalColor = image[sr][sc]

  function dfs(r, c) {
    if (image[r][c] === originalColor) {
      image[r][c] = color
      if (r > 0) dfs(r - 1, c)
      if (r + 1 < lenRow) dfs(r + 1, c)
      if (c > 0) dfs(r, c - 1)
      if (c + 1 < lenCol) dfs(r, c + 1)
    }
  }
  dfs(sr, sc)

  return image
}
// @lc code=end
