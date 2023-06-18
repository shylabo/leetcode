/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) return true
  return getHeight(root) !== -1

  // Helper function
  function getHeight(root) {
    if (root === null) return 0 // base case
    let left = getHeight(root.left)
    let right = getHeight(root.right)
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1
    return Math.max(left, right) + 1
  }
}
// @lc code=end
