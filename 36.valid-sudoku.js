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
  for (let i = 0; i < board.length; i++) {
    let row = new Set()
    let col = new Set()
    let box = new Set()
    let [_row, _col, _box] = ['', '', '']

    for (let j = 0; j < board.length; j++) {
      // Check by row
      _row = board[i][j]
      if (_row !== '.' && row.has(_row)) {
        return false
      } else {
        row.add(_row)
      }

      // Check by column
      _col = board[j][i]
      if (_col !== '.' && col.has(_col)) {
        return false
      } else {
        col.add(_col)
      }

      // Check by box
      _box = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)]
      if (_box !== '.' && box.has(_box)) {
        return false
      } else {
        box.add(_box)
      }
    }
  }

  return true
}
// @lc code=end
