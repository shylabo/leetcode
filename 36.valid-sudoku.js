/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rowSet = new Set()
  let columnSet = new Set()

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // Check by row
      gridForRow = board[i][j]
      if (gridForRow !== '.' && rowSet.has(gridForRow)) {
        return false
      } else {
        rowSet.add(gridForRow)
      }
      // Check by column
      gridForColumn = board[j][i]
      if (gridForColumn !== '.' && columnSet.has(gridForColumn)) {
        return false
      } else {
        columnSet.add(gridForColumn)
      }
    }

    rowSet = new Set() // Reset for each row
    columnSet = new Set() // Reset for each column
  }

  return true
}
// @lc code=end
