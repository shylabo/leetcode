/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function (root) {
  if (root === null) return true
  return isMirror(root.left, root.right)

  function isMirror(leftNode, rightNode) {
    if (leftNode === null && rightNode === null) return true
    if (leftNode === null || rightNode === null) return false
    return (
      leftNode.val === rightNode.val &&
      isMirror(leftNode.left, rightNode.right) &&
      isMirror(leftNode.right, rightNode.left)
    )
  }
}
// @lc code=end
